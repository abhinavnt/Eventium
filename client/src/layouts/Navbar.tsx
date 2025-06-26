import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Navbar = () => {
  const [selectedLocation, setSelectedLocation] = useState("New York");

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-violet-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              EventLux
            </h1>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-white hover:text-violet-400 transition-colors">Home</a>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Browse Events</a>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Bookings</a>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Wishlist</a>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Profile</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-40 bg-black/50 border-violet-500/30 text-white">
                <MapPin className="w-4 h-4 mr-2 text-violet-400" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-black border-violet-500/30">
                <SelectItem value="New York">New York</SelectItem>
                <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                <SelectItem value="Chicago">Chicago</SelectItem>
                <SelectItem value="Miami">Miami</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;