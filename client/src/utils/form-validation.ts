export const validateEmail = (email: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "Email is required";
  if (!emailRegex.test(email)) return "Please enter a valid email address";
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) return "Password is required";
  if (password.length < 8) return "Password must be at least 8 characters long";
  if (!/(?=.*[a-z])/.test(password)) return "Password must contain at least one lowercase letter";
  if (!/(?=.*[A-Z])/.test(password)) return "Password must contain at least one uppercase letter";
  if (!/(?=.*\d)/.test(password)) return "Password must contain at least one number";
  return null;
};

export const validateRequired = (value: string, fieldName: string): string | null => {
  if (!value || value.trim() === "") return `${fieldName} is required`;
  return null;
};

export const validatePhone = (phone: string): string | null => {
  if (!phone) return null; // Optional field
  const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
  if (!phoneRegex.test(phone)) return "Please enter a valid phone number";
  return null;
};

export const validatePincode = (pincode: string): string | null => {
  if (!pincode) return null; // Optional field
  const pincodeRegex = /^\d{6}$/;
  if (!pincodeRegex.test(pincode)) return "Pincode must be 6 digits";
  return null;
};
