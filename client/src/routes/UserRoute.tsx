import Login from "@/pages/auth/Login"
import OtpVerification from "@/pages/auth/OtpVerification"
import Signup from "@/pages/auth/Signup"
import Home from "@/pages/Home"
import { Route, Routes } from "react-router-dom"

const UserRoute = () => {
  return (
   <Routes>


     <Route path="/" element={<Home/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/otp-verification" element={<OtpVerification />} />




   </Routes>
  )
}

export default UserRoute
