import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Search, 
  Filter, 
  Mail, 
  MessageSquare, 
  CheckCircle, 
  XCircle,
  Clock,
  Download,
  QrCode,
  UserCheck
} from "lucide-react";

interface Attendee {
  id: number;
  name: string;
  email: string;
  avatar: string;
  ticketType: string;
  registrationDate: string;
  status: string;
  checkedIn: boolean;
  phone: string;
  company: string;
  eventId: string;
}

interface WaitlistAttendee {
  id: number;
  name: string;
  email: string;
  registrationDate: string;
  position: number;
  eventId: string;
}

const AttendeeManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("tech-conference-2024");

  const events = [
    { id: "tech-conference-2024", name: "Tech Conference 2024", attendees: 234 },
    { id: "marketing-summit", name: "Marketing Summit", attendees: 156 },
    { id: "design-workshop", name: "Design Workshop", attendees: 89 },
  ];

  const allAttendees: Attendee[] = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      avatar: "/placeholder-avatar.jpg",
      ticketType: "VIP Premium",
      registrationDate: "2024-02-15",
      status: "Confirmed",
      checkedIn: true,
      phone: "+1 (555) 123-4567",
      company: "Tech Corp",
      eventId: "tech-conference-2024"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      avatar: "/placeholder-avatar.jpg",
      ticketType: "General Admission",
      registrationDate: "2024-02-18",
      status: "Confirmed",
      checkedIn: false,
      phone: "+1 (555) 987-6543",
      company: "Design Studio",
      eventId: "tech-conference-2024"
    },
    {
      id: 3,
      name: "Mike Chen",
      email: "mike.chen@email.com",
      avatar: "/placeholder-avatar.jpg",
      ticketType: "Student Discount",
      registrationDate: "2024-02-20",
      status: "Pending",
      checkedIn: false,
      phone: "+1 (555) 456-7890",
      company: "University",
      eventId: "tech-conference-2024"
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@email.com",
      avatar: "/placeholder-avatar.jpg",
      ticketType: "General Admission",
      registrationDate: "2024-02-22",
      status: "Confirmed",
      checkedIn: true,
      phone: "+1 (555) 321-0987",
      company: "Marketing Inc",
      eventId: "tech-conference-2024"
    },
    {
      id: 5,
      name: "David Wilson",
      email: "david.w@email.com",
      avatar: "/placeholder-avatar.jpg",
      ticketType: "VIP Premium",
      registrationDate: "2024-02-10",
      status: "Confirmed",
      checkedIn: false,
      phone: "+1 (555) 111-2222",
      company: "Marketing Agency",
      eventId: "marketing-summit"
    },
    {
      id: 6,
      name: "Lisa Chen",
      email: "lisa.chen@email.com",
      avatar: "/placeholder-avatar.jpg",
      ticketType: "General Admission",
      registrationDate: "2024-02-12",
      status: "Confirmed",
      checkedIn: true,
      phone: "+1 (555) 333-4444",
      company: "Creative Studio",
      eventId: "marketing-summit"
    }
  ];

  const allWaitlistAttendees: WaitlistAttendee[] = [
    {
      id: 7,
      name: "Alex Rodriguez",
      email: "alex.r@email.com",
      registrationDate: "2024-02-25",
      position: 1,
      eventId: "tech-conference-2024"
    },
    {
      id: 8,
      name: "Lisa Wang",
      email: "lisa.w@email.com",
      registrationDate: "2024-02-26",
      position: 2,
      eventId: "tech-conference-2024"
    },
    {
      id: 9,
      name: "Robert Brown",
      email: "robert.b@email.com",
      registrationDate: "2024-02-20",
      position: 1,
      eventId: "marketing-summit"
    }
  ];

  // Filter attendees and waitlist by selected event
  const attendees = allAttendees.filter(attendee => attendee.eventId === selectedEvent);
  const waitlistAttendees = allWaitlistAttendees.filter(attendee => attendee.eventId === selectedEvent);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Pending":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "Cancelled":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getTicketTypeColor = (ticketType: string) => {
    switch (ticketType) {
      case "VIP Premium":
        return "bg-violet-500/20 text-violet-400 border-violet-500/30";
      case "General Admission":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Student Discount":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const filteredAttendees = attendees.filter(attendee =>
    attendee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    attendee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    attendee.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const checkedInCount = attendees.filter(attendee => attendee.checkedIn).length;

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
            Attendee Management
          </h1>
          <p className="text-gray-400 mt-2">Manage registrations, check-ins, and communications</p>
        </div>
        <div className="flex space-x-3">
          <Button className="bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-700">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white border-0">
            <QrCode className="w-4 h-4 mr-2" />
            QR Scanner
          </Button>
        </div>
      </motion.div>

      {/* Event Selector & Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-4 gap-6"
      >
        <Card className="lg:col-span-1 bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white text-sm">Select Event</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {events.map((event) => (
                <Button
                  key={event.id}
                  variant={selectedEvent === event.id ? "default" : "ghost"}
                  onClick={() => setSelectedEvent(event.id)}
                  className={`w-full justify-start text-left h-auto p-3 border-0 ${
                    selectedEvent === event.id
                      ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white"
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  <div>
                    <div className="font-medium">{event.name}</div>
                    <div className="text-sm opacity-70">
                      {allAttendees.filter(a => a.eventId === event.id).length} attendees
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Registered</p>
                  <p className="text-2xl font-bold text-white">{attendees.length}</p>
                </div>
                <Users className="w-8 h-8 text-violet-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Checked In</p>
                  <p className="text-2xl font-bold text-white">{checkedInCount}</p>
                </div>
                <UserCheck className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Waitlist</p>
                  <p className="text-2xl font-bold text-white">{waitlistAttendees.length}</p>
                </div>
                <Clock className="w-8 h-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search attendees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-gray-900/50 border-gray-700 focus:border-violet-500 text-white"
          />
        </div>
        <Button className="bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-700">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Tabs defaultValue="attendees" className="space-y-6">
          <TabsList className="bg-gray-900/50 border border-gray-800">
            <TabsTrigger value="attendees" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">
              Attendees ({filteredAttendees.length})
            </TabsTrigger>
            <TabsTrigger value="waitlist" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">
              Waitlist ({waitlistAttendees.length})
            </TabsTrigger>
            <TabsTrigger value="checkin" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">
              Check-in
            </TabsTrigger>
          </TabsList>

          <TabsContent value="attendees">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-0">
                <div className="space-y-0">
                  {filteredAttendees.map((attendee, index) => (
                    <motion.div
                      key={attendee.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                      className="flex items-center justify-between p-6 border-b border-gray-800 last:border-b-0 hover:bg-gray-800/30 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12 border-2 border-violet-500/30">
                          <AvatarImage src={attendee.avatar} />
                          <AvatarFallback className="bg-violet-500 text-white">
                            {attendee.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-3 mb-1">
                            <h3 className="text-white font-semibold">{attendee.name}</h3>
                            {attendee.checkedIn && (
                              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                                Checked In
                              </Badge>
                            )}
                            <Badge className={getStatusColor(attendee.status)}>
                              {attendee.status}
                            </Badge>
                          </div>
                          <p className="text-gray-400 text-sm mb-1">{attendee.email}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <Badge className={getTicketTypeColor(attendee.ticketType)} variant="outline">
                              {attendee.ticketType}
                            </Badge>
                            <span>•</span>
                            <span>{attendee.company}</span>
                            <span>•</span>
                            <span>Registered {new Date(attendee.registrationDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {attendee.status === "Pending" && (
                          <>
                            <Button size="sm" className="bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/30">
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Approve
                            </Button>
                            <Button size="sm" className="bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/30">
                              <XCircle className="w-4 h-4 mr-1" />
                              Reject
                            </Button>
                          </>
                        )}
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-violet-400 hover:bg-violet-500/10">
                          <Mail className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-violet-400 hover:bg-violet-500/10">
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                  {filteredAttendees.length === 0 && (
                    <div className="text-center py-12">
                      <Users className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                      <p className="text-gray-400">No attendees found for this event</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="waitlist">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-0">
                <div className="space-y-0">
                  {waitlistAttendees.map((attendee, index) => (
                    <motion.div
                      key={attendee.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="flex items-center justify-between p-6 border-b border-gray-800 last:border-b-0 hover:bg-gray-800/30 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                          <span className="text-orange-400 font-semibold text-sm">#{attendee.position}</span>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{attendee.name}</h3>
                          <p className="text-gray-400 text-sm">{attendee.email}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            Joined waitlist {new Date(attendee.registrationDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white border-0">
                          Notify Available
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-violet-400 hover:bg-violet-500/10">
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                  {waitlistAttendees.length === 0 && (
                    <div className="text-center py-12">
                      <Clock className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                      <p className="text-gray-400">No one is on the waitlist for this event</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="checkin">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <QrCode className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">QR Code Check-in</h3>
                  <p className="text-gray-400 mb-6">Use your camera to scan attendee QR codes for quick check-in</p>
                  <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white border-0">
                    Start QR Scanner
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default AttendeeManagement;