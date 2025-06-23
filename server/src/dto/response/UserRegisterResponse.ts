import { Types } from "mongoose";

export class UserResponseDto {
  _id: string;
  name: string;
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  attendedEvents?: Types.ObjectId[];

  constructor(data: any) {
    this._id = data._id;
    this.name = data.name;
    this.email = data.email;
    this.role = data.role;
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
    this.attendedEvents = data.attendedEvents || [];
   
  }
}

export class OrganizerResponseDto extends UserResponseDto {
  bio?: string;
  socialMediaLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedIn?: string;
  };
  organizationName?: string;
  isVerified:boolean;
  contactInfo?: {
    phone?: string;
    address?: {
      state?: string;
      city?: string;
      pincode?: string;
    };
  };
  organizedEvents: Types.ObjectId[];

  constructor(data: any) {
    super(data);
    this.organizationName = data.organizationName;
    this.contactInfo = data.contactInfo;
    this.organizedEvents = data.organizedEvents || [];
     this.bio = data.bio || "";
    this.socialMediaLinks = data.socialMediaLinks || {};
    this.isVerified = data.isVerified || false;
  }
}
