import { setCredentials } from "@/redux/features/auth/AuthSlice";
import type { AppDispatch } from "@/redux/store";
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


export const verifyOtp = async (email: string, otp: string, dispatch: AppDispatch) => {
  try {
    const response = await axiosInstance.post("/auth/otpverify", { email, otp }, { withCredentials: true });

    dispatch(setCredentials({ accessToken: response.data.accessToken, user: response.data.user }));
    localStorage.setItem("isAuthenticated", "true");
    return response;
  } catch (error: any) {
    console.log(error);
    
    return error.response;
  }
};

export const resendOtp = async (email: string) => {
  try {
    const response = await axiosInstance.post("/auth/resend-otp", { email }, { withCredentials: true });

    return response;
  } catch (error) {
    console.log(error);
    
  }
};