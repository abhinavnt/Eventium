
export class UserRegistrationRequestDto {
  email: string;
  password: string;
  role: string = "user";
  name: string;

  constructor(data: any) {
    this.email = data.email;
    this.password = data.password;
    this.name = data.name;
    this.role = "user";
  }
}

export class OrganizerRegistrationRequestDto {
  email: string;
  password: string;
  role: string = "organizer";
  name: string;
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
    this.email = data.email;
    this.password = data.password;
    this.name = data.name;
    this.role = "organizer";
    this.organizationName = data.organizationName;
    this.contactInfo = {
      phone: data.phone,
      address: {
        state: data.state,
        city: data.city,
        pincode: data.pincode,
      },
    };
  }
}

export type UserType = "user" | "organizer";

export interface SignupFormData {
  email: string;
  password: string;
  name: string;
  organizationName?: string;
  phone?: string;
  state?: string;
  city?: string;
  pincode?: string;
}

export interface SignupFormErrors {
  [key: string]: string | undefined;
}