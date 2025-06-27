import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Plus,
  Eye,
  Edit,
  MoreHorizontal
} from "lucide-react";

const DashboardHome = () => {
  const stats = [
    { title: "Total Events", value: "24", change: "+12%", icon: Calendar, color: "from-violet-500 to-purple-600" },
    { title: "Total Attendees", value: "1,847", change: "+23%", icon: Users, color: "from-blue-500 to-cyan-600" },
    { title: "Revenue", value: "$24,590", change: "+18%", icon: DollarSign, color: "from-green-500 to-emerald-600" },
    { title: "Growth Rate", value: "32%", change: "+8%", icon: TrendingUp, color: "from-orange-500 to-red-600" },
  ];

  const upcomingEvents = [
    { title: "Tech Conference 2024", date: "Mar 15, 2024", attendees: 234, revenue: "$4,680", status: "Published" },
    { title: "Marketing Summit", date: "Mar 22, 2024", attendees: 156, revenue: "$3,120", status: "Published" },
    { title: "Design Workshop", date: "Apr 5, 2024", attendees: 89, revenue: "$2,670", status: "Draft" },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
              Welcome back, John!
            </h1>
            <p className="text-gray-400 mt-2">Here's what's happening with your events today.</p>
          </div>
          <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            Create Event
          </Button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gray-900/50 border-gray-800 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">{stat.title}</p>
                    <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                    <p className="text-green-400 text-sm mt-1 flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {stat.change}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Revenue Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-400">Chart component would be integrated here</p>
                  <p className="text-sm text-gray-500 mt-2">Using recharts or similar library</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-violet-500/10 border border-violet-500/20 text-violet-400 hover:bg-violet-500/20">
                <Plus className="w-4 h-4 mr-2" />
                Create New Event
              </Button>
              <Button className="w-full justify-start bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-gray-700/50">
                <Users className="w-4 h-4 mr-2" />
                View Attendees
              </Button>
              <Button className="w-full justify-start bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-gray-700/50">
                <DollarSign className="w-4 h-4 mr-2" />
                Check Payouts
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Upcoming Events */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-white">Upcoming Events</CardTitle>
              <Button variant="ghost" className="text-violet-400 hover:text-violet-300">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-violet-500/50 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                >
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">{event.title}</h3>
                    <p className="text-gray-400 text-sm">{event.date}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-sm text-gray-500">{event.attendees} attendees</span>
                      <span className="text-sm text-green-400">{event.revenue}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        event.status === 'Published' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-orange-500/20 text-orange-400'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default DashboardHome;