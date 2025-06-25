import { inject, injectable } from "inversify";
import { IAuthService } from "../core/interfaces/services/IAuthService";
import { TYPES } from "../di/types";
import { IUserRepository } from "../core/interfaces/repository/IUserRepository";
import { OrganizerRegistrationRequestDto } from "../dto/request/OrganizerRegistrationRequest";
import { UserRegistrationRequestDto } from "../dto/request/UserRegistrationRequest";
import bcrypt, { hash } from "bcryptjs";
import { RedisClient } from "../config/redis";
import { sendOtpEmail } from "../utils/emailService";
import { UserResponseDto, OrganizerResponseDto } from "../dto/response/UserRegisterResponse";
import { IUser } from "../model/User";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import { generateToken } from "../utils/tokenService";
import { HttpError } from "../types/HttpError";

@injectable()
export class AuthService implements IAuthService {
  constructor(@inject(TYPES.UserRepository) private userRepository: IUserRepository) {}

  async register(data: OrganizerRegistrationRequestDto | UserRegistrationRequestDto): Promise<void> {
    const existingUser = await this.userRepository.findByEmail(data.email);
    if (existingUser) {
      throw new HttpError(400,"Email already exists");
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Send OTP email
    await sendOtpEmail(data.email, otp);

    // Store OTP in Redis with 150 seconds expiration
    await RedisClient.setex(`otp:${data.email}`, 150, JSON.stringify({ otp }));

    // Store user session data in Redis with 600 seconds expiration
    const sessionData = {
      name: data.name,
      email: data.email,
      hashedPassword,
      role: data.role,
      ...(data instanceof OrganizerRegistrationRequestDto && {
        organizationName: data.organizationName,
        contactInfo: data.contactInfo,
      }),
    };

    await RedisClient.setex(`user_session:${data.email}`, 600, JSON.stringify(sessionData));
  }

  async verifyOtp(email: string, otp: string): Promise<{ accessToken: string; refreshToken: string; user: UserResponseDto | OrganizerResponseDto }> {
    // Verify OTP
    console.log("reached service",email,"  ",otp,"  ");
    
    const otpData = await RedisClient.get(`otp:${email}`);
    if (!otpData) throw new HttpError(400, "OTP expired or invalid");

    const { otp: storedOtp } = JSON.parse(otpData);
    if (otp !== storedOtp) throw new Error("Invalid OTP");

    // Get user session data
    const userData = await RedisClient.get(`user_session:${email}`);
    if (!userData) throw new HttpError(400,"User data not found. Please register again");

    const parsedData = JSON.parse(userData);

    const userId = uuidv4();

    console.log("reached before the dto");
    console.log(parsedData);
    
    let userCreateData: Partial<IUser>;
    if (parsedData.role === "organizer") {
      // Validate organizer data
      // const organizerData = new OrganizerRegistrationRequestDto(parsedData);
      userCreateData = {
        email: parsedData.email,
        password: parsedData.hashedPassword,
        name: parsedData.name,
        role: "organizer",
        userId,
        organizationName: parsedData.organizationName,
        contactInfo: parsedData.contactInfo,
      };
    } else if (parsedData.role === "user") {
      // Validate user data
      // const userData = new UserRegistrationRequestDto(parsedData);
      userCreateData = {
        email: parsedData.email,
        password: parsedData.hashedPassword,
        name: parsedData.name,
        role: "user",
        userId,
      };
    } else {
      throw new HttpError(400,"Invalid role in session data");
    }

    // Create user in database
    console.log("goin for repository");
    
    const user = await this.userRepository.create(userCreateData);

    if (!user) throw new HttpError(500,"Cannot create user. Please register again");

    // Generate tokens

    const accessToken = generateToken({ userId: user.userId, role: user.role }, process.env.ACCESS_TOKEN_SECRET || "secret", "60m");

    const refreshToken = generateToken({ userId: user.userId, role: user.role }, process.env.REFRESH_TOKEN_SECRET || "refresh_secret", "7d");

    // Clean up Redis
    await RedisClient.del(`otp:${email}`);
    await RedisClient.del(`user_session:${email}`);

    // Create appropriate response DTO based on role
    let userDto: UserResponseDto | OrganizerResponseDto;
    if (user.role === "organizer") {
      userDto = new OrganizerResponseDto(user);
    } else {
      userDto = new UserResponseDto(user);
    }

    return { accessToken, refreshToken, user: userDto };
  }

  async resendOtp(email: string): Promise<void> {
    const user = await RedisClient.get(`user_session:${email}`);
    if (!user) throw new HttpError(400,"user session expired please register again");

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await sendOtpEmail(email, otp);

    await RedisClient.setex(`otp:${email}`, 120, JSON.stringify({ otp }));
  }

  async login(email: string, password: string): Promise<{ accessToken: string; refreshToken: string; user: UserResponseDto | OrganizerResponseDto }> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new HttpError(400,"User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new HttpError(400,"Invalid password");
    }

    const accessToken = generateToken({ userId: user.userId, role: user.role }, process.env.ACCESS_TOKEN_SECRET || "secret", "60m");

    const refreshToken = generateToken({ userId: user.userId, role: user.role }, process.env.REFRESH_TOKEN_SECRET || "refresh_secret", "7d");

    // Create appropriate response DTO based on role
    let userDto: UserResponseDto | OrganizerResponseDto;
    if (user.role === "organizer") {
      userDto = new OrganizerResponseDto(user);
    } else {
      userDto = new UserResponseDto(user);
    }

    return { accessToken, refreshToken, user: userDto };
  }

  async refreshAccessToken(refreshToken: string): Promise<{ accessToken: string; user: UserResponseDto | OrganizerResponseDto }> {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!) as {
      userId: string;
      role: string;
    };

    const userId = decoded.userId;
    const userRole = decoded.role;

   

    
    const user = await this.userRepository.findByUserId(decoded.userId);

    if (!user) {
      throw new Error("cannot find user please try again");
    }

    const accessToken = generateToken({ userId, userRole }, process.env.ACCESS_TOKEN_SECRET || "secret", "60m");


    let userDto: UserResponseDto | OrganizerResponseDto;
    if (user.role === "organizer") {
      userDto = new OrganizerResponseDto(user);
    } else {
      userDto = new UserResponseDto(user);
    }

    return { accessToken, user: userDto };
  }
}
