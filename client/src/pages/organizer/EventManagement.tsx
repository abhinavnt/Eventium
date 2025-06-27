import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Search, 
  Calendar, 
  Users, 
  DollarSign, 
  Edit, 
  Eye, 
  Trash2,
  MoreHorizontal
} from "lucide-react";
import { Link } from "react-router-dom";

const EventManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const events = [
    {
      id: 1,
      title: "Tech Conference 2024",
      description: "Annual technology conference featuring industry leaders",
      date: "2024-03-15",
      time: "09:00 AM",
      location: "San Francisco Convention Center",
      attendees: 234,
      revenue: 4680,
      status: "Published",
      ticketsSold: 234,
      totalTickets: 500
    },
    {
      id: 2,
      title: "Marketing Summit",
      description: "Digital marketing strategies and trends",
      date: "2024-03-22",
      time: "10:00 AM",
      location: "New York Marriott",
      attendees: 156,
      revenue: 3120,
      status: "Published",
      ticketsSold: 156,
      totalTickets: 300
    },
    {
      id: 3,
      title: "Design Workshop",
      description: "UX/UI design principles and best practices",
      date: "2024-04-05",
      time: "02:00 PM",
      location: "Los Angeles Design Center",
      attendees: 89,
      revenue: 2670,
      status: "Draft",
      ticketsSold: 89,
      totalTickets: 150
    },
    {
      id: 4,
      title: "Startup Pitch Night",
      description: "Entrepreneurs pitch their innovative ideas",
      date: "2024-04-12",
      time: "06:00 PM",
      location: "Silicon Valley Hub",
      attendees: 67,
      revenue: 1340,
      status: "Cancelled",
      ticketsSold: 67,
      totalTickets: 200
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Draft":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "Cancelled":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || event.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

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
            Event Management
          </h1>
          <p className="text-gray-400 mt-2">Create, manage, and track your events</p>
        </div>
        <Link to="create">
          <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            Create Event
          </Button>
        </Link>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col md:flex-row gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-gray-900/50 border-gray-700 focus:border-violet-500 text-white"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={filterStatus === "all" ? "default" : "outline"}
            onClick={() => setFilterStatus("all")}
            className={filterStatus === "all" ? "bg-violet-500 hover:bg-violet-600" : "border-gray-700 text-gray-300 hover:bg-gray-800"}
          >
            All
          </Button>
          <Button
            variant={filterStatus === "published" ? "default" : "outline"}
            onClick={() => setFilterStatus("published")}
            className={filterStatus === "published" ? "bg-violet-500 hover:bg-violet-600" : "border-gray-700 text-gray-300 hover:bg-gray-800"}
          >
            Published
          </Button>
          <Button
            variant={filterStatus === "draft" ? "default" : "outline"}
            onClick={() => setFilterStatus("draft")}
            className={filterStatus === "draft" ? "bg-violet-500 hover:bg-violet-600" : "border-gray-700 text-gray-300 hover:bg-gray-800"}
          >
            Draft
          </Button>
        </div>
      </motion.div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <Card className="bg-gray-900/50 border-gray-800 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10 group">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-white text-lg truncate group-hover:text-violet-300 transition-colors">
                      {event.title}
                    </CardTitle>
                    <p className="text-gray-400 text-sm mt-1 line-clamp-2">{event.description}</p>
                  </div>
                  <Badge className={`ml-2 ${getStatusColor(event.status)}`}>
                    {event.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-4 h-4 mr-2 text-violet-400" />
                    {new Date(event.date).toLocaleDateString()} at {event.time}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-4 h-4 mr-2 text-violet-400" />
                    {event.attendees} attendees ({event.ticketsSold}/{event.totalTickets} tickets)
                  </div>
                  <div className="flex items-center text-gray-300">
                    <DollarSign className="w-4 h-4 mr-2 text-violet-400" />
                    ${event.revenue.toLocaleString()} revenue
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-violet-500/10">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Link to={`edit/${event.id}`}>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-violet-500/10">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400 hover:bg-red-500/10">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center py-12"
        >
          <Calendar className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">No events found</h3>
          <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
          <Link to="create">
            <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Event
            </Button>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default EventManagement;