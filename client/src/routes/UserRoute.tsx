import Login from "@/pages/auth/Login"
import OtpVerification from "@/pages/auth/OtpVerification"
import Signup from "@/pages/auth/Signup"
import EventDetails from "@/pages/EventDetails"
import Home from "@/pages/Home"
import HomePage from "@/pages/HomePage"
import { Route, Routes } from "react-router-dom"

const UserRoute = () => {
  return (
   <Routes>


     <Route path="/" element={<HomePage/>}/>
     <Route path="/event/:id" element={<EventDetails/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/otp-verification" element={<OtpVerification />} />




   </Routes>
  )
}

export default UserRoute
