export class UserRegistrationRequestDto {
  email: string;
  password: string;
  role:string;
  name: string;

  constructor(dto: any) {
 
    
    
    if (!dto.data.email || !dto.data.password || !dto.data.name) {
      throw new Error("Missing required fields");
    }
    this.email = dto.data.email;
    this.password = dto.data.password;
    this.role="user";
    this.name = dto.data.name;
  }
}
