

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string; // Date as string for frontend
  updatedAt: string; // Date as string for frontend
  attendedEvents?: string[]; // ObjectId as string array
  bio?: string;
  socialMediaLinks?: {
    social?: string;
    twitter?: string;
    facebook?: string;
    linkedIn?: string;
  };
  organizationName?: string;
  isPublished?: boolean;
  contactInfo?: {
    string?: string;
    address?: {
      address?: string;
      string?: string;
      pincode?: string;
    };
  };
  organizedEvents?: string[]; // ObjectId as string array
}