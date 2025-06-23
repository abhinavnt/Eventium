export class UserRegistrationRequestDto {
  email: string;
  password: string;
  role:string;
  name: string;

  constructor(data: any) {
    if (!data.email || !data.password || !data.name) {
      throw new Error("Missing required fields");
    }
    this.email = data.email;
    this.password = data.password;
    this.role="user";
    this.name = data.name;
  }
}
