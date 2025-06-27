import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Calendar,
  Download,
  Eye,
  Globe,
  Clock,
  Star,
  BarChart3
} from "lucide-react";

const Analytics = () => {
  const overviewStats = [
    { title: "Total Revenue", value: "$24,590", change: "+18%", icon: DollarSign, color: "from-green-500 to-emerald-600" },
    { title: "Total Attendees", value: "1,847", change: "+23%", icon: Users, color: "from-blue-500 to-cyan-600" },
    { title: "Events Hosted", value: "24", change: "+12%", icon: Calendar, color: "from-violet-500 to-purple-600" },
    { title: "Avg. Rating", value: "4.8", change: "+5%", icon: Star, color: "from-orange-500 to-red-600" },
  ];

  const recentEvents = [
    { name: "Tech Conference 2024", attendees: 234, revenue: 4680, rating: 4.9, date: "Mar 15" },
    { name: "Marketing Summit", attendees: 156, revenue: 3120, rating: 4.7, date: "Mar 22" },
    { name: "Design Workshop", attendees: 89, revenue: 2670, rating: 4.8, date: "Apr 5" },
  ];

  const demographics = [
    { category: "Age 18-25", percentage: 28, count: 518 },
    { category: "Age 26-35", percentage: 42, count: 776 },
    { category: "Age 36-45", percentage: 22, count: 406 },
    { category: "Age 46+", percentage: 8, count: 147 },
  ];

  const topCities = [
    { city: "San Francisco", attendees: 234, percentage: 12.7 },
    { city: "New York", attendees: 189, percentage: 10.2 },
    { city: "Los Angeles", attendees: 156, percentage: 8.4 },
    { city: "Chicago", attendees: 134, percentage: 7.3 },
    { city: "Seattle", attendees: 112, percentage: 6.1 },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
            Analytics & Reports
          </h1>
          <p className="text-gray-400 mt-2">Track performance, revenue, and attendee insights</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700">
            <BarChart3 className="w-4 h-4 mr-2" />
            Custom Report
          </Button>
        </div>
      </motion.div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => (
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

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Tabs defaultValue="revenue" className="space-y-6">
          <TabsList className="bg-gray-900/50 border border-gray-800">
            <TabsTrigger value="revenue" className="data-[state=active]:bg-violet-500">
              Revenue
            </TabsTrigger>
            <TabsTrigger value="attendance" className="data-[state=active]:bg-violet-500">
              Attendance
            </TabsTrigger>
            <TabsTrigger value="demographics" className="data-[state=active]:bg-violet-500">
              Demographics
            </TabsTrigger>
            <TabsTrigger value="engagement" className="data-[state=active]:bg-violet-500">
              Engagement
            </TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <TabsContent value="revenue">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Revenue Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <DollarSign className="w-10 h-10 text-white" />
                        </div>
                        <p className="text-gray-400 mb-2">Revenue Chart</p>
                        <p className="text-sm text-gray-500">Interactive charts would be rendered here using recharts</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="attendance">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Attendance Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Users className="w-10 h-10 text-white" />
                        </div>
                        <p className="text-gray-400 mb-2">Attendance Chart</p>
                        <p className="text-sm text-gray-500">Attendance trends and patterns visualization</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="demographics">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Attendee Demographics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {demographics.map((demo, index) => (
                        <motion.div
                          key={demo.category}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-white font-medium">{demo.category}</span>
                            <Badge variant="secondary" className="bg-violet-500/10 text-violet-300">
                              {demo.count}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-32 bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-violet-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${demo.percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-gray-400 text-sm w-12">{demo.percentage}%</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="engagement">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Engagement Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                        <Eye className="w-8 h-8 text-violet-400 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-white">12,450</p>
                        <p className="text-gray-400 text-sm">Page Views</p>
                      </div>
                      <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                        <Globe className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-white">8,340</p>
                        <p className="text-gray-400 text-sm">Unique Visitors</p>
                      </div>
                      <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                        <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-white">3:24</p>
                        <p className="text-gray-400 text-sm">Avg. Session</p>
                      </div>
                      <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                        <TrendingUp className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-white">18.5%</p>
                        <p className="text-gray-400 text-sm">Conversion Rate</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentEvents.map((event, index) => (
                        <motion.div
                          key={event.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                          className="p-3 bg-gray-800/30 rounded-lg"
                        >
                          <h4 className="text-white font-medium text-sm">{event.name}</h4>
                          <div className="flex justify-between items-center mt-2">
                            <div className="text-xs text-gray-400">
                              <p>{event.attendees} attendees</p>
                              <p>${event.revenue.toLocaleString()}</p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center space-x-1">
                                <Star className="w-3 h-3 text-yellow-400" />
                                <span className="text-xs text-white">{event.rating}</span>
                              </div>
                              <p className="text-xs text-gray-400">{event.date}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Top Cities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {topCities.map((city, index) => (
                        <motion.div
                          key={city.city}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                          className="flex items-center justify-between"
                        >
                          <div>
                            <p className="text-white text-sm font-medium">{city.city}</p>
                            <p className="text-gray-400 text-xs">{city.attendees} attendees</p>
                          </div>
                          <Badge variant="secondary" className="bg-violet-500/10 text-violet-300 text-xs">
                            {city.percentage}%
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Analytics;