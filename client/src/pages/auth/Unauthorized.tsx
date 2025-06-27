"use client"

import { Shield, Home, ArrowLeft, Lock, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Unauthorized() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-violet-950 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large background orbs */}
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-violet-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-96 sm:h-96 bg-violet-700/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Additional smaller orbs for mobile */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 sm:w-32 sm:h-32 bg-violet-500/15 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-violet-400/20 rounded-full blur-xl animate-pulse delay-300"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="bg-black/40 backdrop-blur-xl border border-violet-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:shadow-violet-500/10 transition-all duration-500 group">
          {/* Enhanced icon section */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-violet-600 via-violet-700 to-violet-800 rounded-full flex items-center justify-center shadow-2xl shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-all duration-500 group-hover:scale-110">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white drop-shadow-lg" />
              </div>
              {/* Rotating ring */}
              <div
                className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-2 border-violet-400/30 rounded-full animate-spin"
                style={{ animationDuration: "8s" }}
              ></div>
              {/* Pulsing outer ring */}
              <div className="absolute -inset-2 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 border border-violet-500/20 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Enhanced content section */}
          <div className="text-center space-y-4 sm:space-y-6">
            {/* Main heading */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent leading-tight">
                Access Denied
              </h1>
              <div className="flex items-center justify-center space-x-2 text-violet-300">
                <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base font-medium tracking-wider">RESTRICTED AREA</span>
                <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>

            {/* Status indicator */}
            <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 text-red-300">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-medium">Unauthorized Access</span>
            </div>

            {/* Description */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-violet-200 text-base sm:text-lg lg:text-xl font-medium">Premium Access Required</p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
                You don't have the necessary permissions to access this exclusive area. This section is reserved for
                authorized personnel only.
              </p>
            </div>

            {/* Enhanced divider */}
            <div className="flex items-center my-6 sm:my-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
              <div className="px-4">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse delay-200"></div>
                  <div className="w-2 h-2 bg-violet-600 rounded-full animate-pulse delay-400"></div>
                </div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
            </div>

            {/* Enhanced action buttons */}
            <div className="space-y-3 sm:space-y-4 pt-2">
              <Link to="/" className="block">
                <Button className="w-full bg-gradient-to-r from-violet-600 via-violet-700 to-violet-800 hover:from-violet-700 hover:via-violet-800 hover:to-violet-900 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-violet-500/30 text-sm sm:text-base">
                  <Home className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Return to Home
                </Button>
              </Link>

              <Button
                variant="outline"
                className="w-full border-violet-500/30 bg-violet-500/10 text-violet-200 hover:bg-violet-500/20 hover:border-violet-400/50 hover:text-violet-100 font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-sm sm:text-base"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Go Back
              </Button>

              {/* Additional help button */}
              <Button
                variant="ghost"
                className="w-full text-violet-400 hover:text-violet-300 hover:bg-violet-500/10 font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 text-xs sm:text-sm"
              >
                Need Help? Contact Administrator
              </Button>
            </div>
          </div>

          {/* Enhanced bottom accent with animation */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-violet-500 to-violet-600 rounded-b-2xl sm:rounded-b-3xl">
            <div className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* Enhanced floating decorative elements */}
        <div
          className="absolute -top-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-violet-500 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "2s" }}
        ></div>
        <div
          className="absolute -top-1 -right-3 w-2 h-2 sm:w-3 sm:h-3 bg-violet-400 rounded-full opacity-80 animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
        ></div>
        <div
          className="absolute -bottom-3 -left-1 w-2 h-2 sm:w-3 sm:h-3 bg-violet-600 rounded-full opacity-50 animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute -bottom-1 -right-2 w-2 h-2 bg-violet-300 rounded-full opacity-70 animate-bounce"
          style={{ animationDelay: "1.5s", animationDuration: "2.2s" }}
        ></div>

        {/* Additional floating elements for larger screens */}
        <div className="hidden sm:block absolute top-1/4 -left-8 w-1 h-1 bg-violet-400 rounded-full opacity-60 animate-ping"></div>
        <div
          className="hidden sm:block absolute bottom-1/4 -right-8 w-1 h-1 bg-violet-500 rounded-full opacity-70 animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Enhanced footer with responsive text */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-center">
          <p className="text-violet-400/60 text-xs sm:text-sm font-medium tracking-wider">
            PREMIUM EVENT MANAGEMENT SYSTEM
          </p>
          <div className="mt-1 flex justify-center space-x-1">
            <div className="w-1 h-1 bg-violet-500/40 rounded-full"></div>
            <div className="w-1 h-1 bg-violet-400/40 rounded-full"></div>
            <div className="w-1 h-1 bg-violet-600/40 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Mobile-specific enhancements */}
      <div className="sm:hidden absolute top-4 left-4 right-4">
        <div className="h-1 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent rounded-full"></div>
      </div>
    </div>
  )
}
