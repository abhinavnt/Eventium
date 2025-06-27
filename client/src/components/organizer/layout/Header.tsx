import { Bell, Search, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header = ({ onMenuToggle }: HeaderProps) => {
  return (
    <motion.header 
      className="bg-black/40 backdrop-blur-xl border-b border-violet-500/20 px-6 py-4"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuToggle}
            className="text-gray-400 hover:text-white hover:bg-violet-500/10"
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search events, attendees..."
              className="pl-10 bg-gray-900/50 border-gray-700 focus:border-violet-500 text-white w-80"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white hover:bg-violet-500/10 relative"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-violet-500 rounded-full"></span>
          </Button>

          <Avatar className="w-8 h-8 border-2 border-violet-500/30">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="bg-violet-500 text-white text-sm">JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;