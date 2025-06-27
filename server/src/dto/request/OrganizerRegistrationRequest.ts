import { HttpError } from "../../types/HttpError";

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
    if (!data.data.email || !data.data.password || !data.data.name) {
      throw new HttpError(400,"Missing required fields")
    }
    this.email = data.data.email;
    this.password = data.data.password;
    this.role="organizer";
    this.name = data.data.name;
    this.organizationName = data.data.organizationName;
    this.contactInfo = data.data.contactInfo;
  }
}
