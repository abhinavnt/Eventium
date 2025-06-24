"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Sparkles, ArrowLeft, Mail, Timer, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

const OtpVerification = () => {
  const [otp, setOtp] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [timeLeft, setTimeLeft] = useState(60)
  const [canResend, setCanResend] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const email = location.state?.email || "your email"

  // Timer functionality with localStorage persistence
  useEffect(() => {
    const savedTimestamp = localStorage.getItem("otpTimestamp")
    const currentTime = Math.floor(Date.now() / 1000)

    if (savedTimestamp) {
      const elapsed = currentTime - Number.parseInt(savedTimestamp)
      const remaining = Math.max(0, 60 - elapsed)
      setTimeLeft(remaining)
      setCanResend(remaining === 0)
    } else {
      localStorage.setItem("otpTimestamp", currentTime.toString())
    }

    const timer = setInterval(() => {
      const savedTime = localStorage.getItem("otpTimestamp")
      if (savedTime) {
        const elapsed = Math.floor(Date.now() / 1000) - Number.parseInt(savedTime)
        const remaining = Math.max(0, 60 - elapsed)
        setTimeLeft(remaining)

        if (remaining === 0) {
          setCanResend(true)
          clearInterval(timer)
        }
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleOtpChange = (value: string) => {
    setOtp(value)
    if (error) setError("")
  }

  const validateOtp = (): boolean => {
    if (!otp || otp.length !== 6) {
      setError("Please enter a complete 6-digit OTP")
      return false
    }
    if (!/^\d{6}$/.test(otp)) {
      setError("OTP must contain only numbers")
      return false
    }
    return true
  }

  const handleVerify = async () => {
    if (!validateOtp()) return

    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("OTP verification:", { otp, email })
      // Navigate to dashboard or login on success
      navigate("/login")
    } catch (error) {
      setError("Invalid OTP. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleResend = async () => {
    if (!canResend) return

    setIsResending(true)
    try {
      // Simulate resend API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Reset timer
      const currentTime = Math.floor(Date.now() / 1000)
      localStorage.setItem("otpTimestamp", currentTime.toString())
      setTimeLeft(60)
      setCanResend(false)
      setOtp("")
      setError("")

      console.log("OTP resent to:", email)
    } catch (error) {
      setError("Failed to resend OTP. Please try again.")
    } finally {
      setIsResending(false)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-3 sm:p-4 lg:p-6 relative overflow-hidden">
      {/* Animated Background Elements - Responsive sizes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-48 h-48 sm:w-72 sm:h-72 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-8 -right-8 w-64 h-64 sm:w-96 sm:h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-violet-600/10 to-purple-600/10 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "25s" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-sm sm:max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-purple-600/10 rounded-2xl sm:rounded-3xl blur-xl" />
          <div className="relative bg-gray-900/40 backdrop-blur-xl p-4 sm:p-6 lg:p-8 xl:p-10 rounded-2xl sm:rounded-3xl border border-gray-700/50 shadow-2xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center mb-6 sm:mb-8"
            >
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-violet-500/30">
                  <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-violet-400" />
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Verify Your Email</h1>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed px-2">
                We've sent a 6-digit verification code to{" "}
                <span className="text-violet-400 font-medium break-all">{email}</span>
              </p>
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full mx-auto mt-3 sm:mt-4" />
            </motion.div>

            {/* OTP Input */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-center">
                  <InputOTP maxLength={6} value={otp} onChange={handleOtpChange} className="gap-1.5 sm:gap-2 lg:gap-3">
                    <InputOTPGroup className="gap-1.5 sm:gap-2 lg:gap-3">
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <InputOTPSlot
                          key={index}
                          index={index}
                          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-lg sm:text-xl font-bold bg-gray-800/60 backdrop-blur-sm border-gray-700/50 text-white focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 transition-all duration-300 rounded-lg"
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm text-center flex items-center justify-center gap-2 px-2"
                  >
                    <div className="w-1 h-1 bg-red-400 rounded-full flex-shrink-0" />
                    <span className="break-words">{error}</span>
                  </motion.p>
                )}
              </div>

              {/* Verify Button */}
              <Button
                onClick={handleVerify}
                disabled={isLoading || otp.length !== 6}
                className="w-full relative overflow-hidden bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                    Verify Code
                  </span>
                )}
              </Button>

              {/* Resend Section */}
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="flex items-center justify-center gap-2 text-gray-400 px-2">
                  <Timer className="h-4 w-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-center">
                    {canResend ? "You can resend the code now" : `Resend available in ${formatTime(timeLeft)}`}
                  </span>
                </div>

                <Button
                  onClick={handleResend}
                  disabled={!canResend || isResending}
                  variant="ghost"
                  className="text-violet-400 hover:text-violet-300 hover:bg-violet-600/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base py-2 sm:py-3"
                >
                  {isResending ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-4 h-4 border-2 border-violet-400 border-t-transparent rounded-full mr-2"
                    />
                  ) : (
                    <RotateCcw className="h-4 w-4 mr-2" />
                  )}
                  Resend Code
                </Button>
              </div>
            </motion.div>

            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-center mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700/50"
            >
              <Link
                to="/signup"
                className="text-gray-400 hover:text-violet-400 font-medium transition-colors hover:underline flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Signup
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default OtpVerification
