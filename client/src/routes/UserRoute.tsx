import ProtectedRoute from "@/components/auth/ProtectedRoute"
import Login from "@/pages/auth/Login"
import OtpVerification from "@/pages/auth/OtpVerification"
import Signup from "@/pages/auth/Signup"
import Unauthorized from "@/pages/auth/Unauthorized"
import EventDetails from "@/pages/EventDetails"
import HomePage from "@/pages/HomePage"
import TempHome from "@/pages/TempHome"
import { Route, Routes } from "react-router-dom"

const UserRoute = () => {
  return (
   <Routes>


     <Route path="/" element={<TempHome/>}/>
     <Route path="/unauthorized" element={<Unauthorized/>}/>
     <Route path="/home" element={<ProtectedRoute requiredRole="user"><HomePage/></ProtectedRoute>}/>
     <Route path="/event/:id" element={<EventDetails/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/otp-verification" element={<OtpVerification />} />




   </Routes>
  )
}

export default UserRoute
