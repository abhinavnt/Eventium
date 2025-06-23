import mongoose, { Schema, Document, Types } from 'mongoose';

// Define the User interface
export interface IUser extends Document {
  email: string;
  password: string;
  userId: string;
  name: string;
  role: 'user' | 'organizer' | 'admin';
  attendedEvents?: Types.ObjectId[];
  organizedEvents?: Types.ObjectId[];
  organizationName?: string;
  bio?: string;
  socialMediaLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedIn?: string;
  };
  isVerified?: boolean;
  contactInfo?: {
    phone?: string;
    address?: {
      state?: string;
      city?: string;
      pincode?: string;
    };
  };
  createdAt: Date;
  updatedAt: Date;
}

// Define the User schema
const UserSchema: Schema<IUser> = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  userId: { type: String, required: true },
  role: { type: String, enum: ['user', 'organizer', 'admin'], required: true },
  attendedEvents: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
  organizedEvents: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
  organizationName: { type: String },
  bio: { type: String },
  socialMediaLinks: {
    facebook: { type: String },
    twitter: { type: String },
    instagram: { type: String },
    linkedIn: { type: String }
  },
  isVerified: { type: Boolean, default: false },
  contactInfo: {
    phone: { type: String },
    address: {
      state: { type: String },
      city: { type: String },
      pincode: { type: String }
    }
  }
}, { timestamps: true });

export const User = mongoose.model<IUser>("User", UserSchema);