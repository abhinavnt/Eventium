import type { OrganizerRegistrationRequestDto, UserRegistrationRequestDto } from "@/types/auth";
import axiosInstance from "@/utils/axiosInstance";

export const registerUser = async (data: UserRegistrationRequestDto | OrganizerRegistrationRequestDto) => {
  try {
    console.log("registerUser service",data);
    const response = await axiosInstance.post(`/auth/register?role=${data.role}`, { data }, { withCredentials: true });
    console.log(response,"response");
    return response;
    
  } catch (error: any) {
    console.log(error);
    
    return error.response;
  }
};
