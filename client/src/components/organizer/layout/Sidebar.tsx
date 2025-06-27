
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Home, 
  Calendar, 
  Ticket, 
  Users, 
  BarChart3, 
  User, 
  Palette, 
  MessageSquare, 
  CreditCard, 
  Archive 
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navigationItems = [
  { name: "Dashboard", href: "", icon: Home },
  { name: "Events", href: "events", icon: Calendar },
  { name: "Ticketing", href: "ticketing", icon: Ticket },
  { name: "Attendees", href: "attendees", icon: Users },
  { name: "Analytics", href: "analytics", icon: BarChart3 },
  { name: "Profile", href: "profile", icon: User },
  { name: "Branding", href: "branding", icon: Palette },
  { name: "Communications", href: "communications", icon: MessageSquare },
  { name: "Payouts", href: "payouts", icon: CreditCard },
  { name: "Post-Event", href: "post-event", icon: Archive },
];

const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <motion.div
      className={`fixed left-0 top-0 h-full bg-black/80 backdrop-blur-xl border-r border-violet-500/20 transition-all duration-300 z-10 ${
        isOpen ? "w-64" : "w-16"
      }`}
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <motion.div 
          className="flex items-center space-x-3"
          animate={{ justifyContent: isOpen ? "flex-start" : "center" }}
        >
          <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          {isOpen && (
            <motion.h1 
              className="text-xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              EventPro
            </motion.h1>
          )}
        </motion.div>
      </div>

      <nav className="mt-8">
        {navigationItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-6 py-3 text-gray-300 hover:text-white hover:bg-violet-500/10 transition-all duration-200 group ${
                  isActive ? "text-violet-400 bg-violet-500/20 border-r-2 border-violet-500" : ""
                }`
              }
            >
              <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="font-medium"
                >
                  {item.name}
                </motion.span>
              )}
            </NavLink>
          </motion.div>
        ))}
      </nav>
    </motion.div>
  );
};

export default Sidebar;