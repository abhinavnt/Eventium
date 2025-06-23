export class OrganizerRegistrationRequestDto {
  email: string;
  password: string;
  name: string;
  role:string;
  organizationName?: string;
  contactInfo?: {
    phone?: string;
    address?: {
      state?: string;
      city?: string;
      pincode?: string;
    };
  };

  constructor(data: any) {
    if (!data.email || !data.password || !data.name) {
      throw new Error("Missing required fields");
    }
    this.email = data.email;
    this.password = data.password;
    this.role="organizer";
    this.name = data.name;
    this.organizationName = data.organizationName;
    this.contactInfo = data.contactInfo;
  }
}
