import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Send, 
  Mail, 
  MessageSquare, 
  Bell, 
  Clock,
  Users,
  Eye,
  Edit,
  Trash2,
  Plus
} from "lucide-react";

const Communications = () => {
  const [selectedEvent, setSelectedEvent] = useState("tech-conference-2024");
  const [newMessage, setNewMessage] = useState({
    subject: "",
    content: "",
    recipients: "all",
    type: "email"
  });

  const events = [
    { id: "tech-conference-2024", name: "Tech Conference 2024", attendees: 234 },
    { id: "marketing-summit", name: "Marketing Summit", attendees: 156 },
    { id: "design-workshop", name: "Design Workshop", attendees: 89 },
  ];

  const messages = [
    {
      id: 1,
      subject: "Welcome to Tech Conference 2024",
      type: "email",
      recipients: 234,
      sentDate: "2024-02-20",
      status: "Sent",
      openRate: "68%"
    },
    {
      id: 2,
      subject: "Event Schedule Updated",
      type: "notification",
      recipients: 234,
      sentDate: "2024-02-22",
      status: "Sent",
      openRate: "82%"
    },
    {
      id: 3,
      subject: "Reminder: Event Tomorrow",
      type: "sms",
      recipients: 156,
      sentDate: "2024-03-14",
      status: "Scheduled",
      openRate: "N/A"
    }
  ];

  const chatMessages = [
    {
      id: 1,
      user: "Sarah Johnson",
      message: "What time does the keynote start?",
      timestamp: "10:30 AM",
      avatar: "/placeholder-avatar.jpg"
    },
    {
      id: 2,
      user: "Mike Chen",
      message: "Looking forward to the networking session!",
      timestamp: "10:45 AM",
      avatar: "/placeholder-avatar.jpg"
    },
    {
      id: 3,
      user: "Emily Davis",
      message: "Is there WiFi available at the venue?",
      timestamp: "11:15 AM",
      avatar: "/placeholder-avatar.jpg"
    }
  ];

  const templates = [
    { id: "welcome", name: "Welcome Email", subject: "Welcome to {{event_name}}" },
    { id: "reminder", name: "Event Reminder", subject: "Don't forget: {{event_name}} is tomorrow!" },
    { id: "update", name: "Schedule Update", subject: "Important update for {{event_name}}" },
    { id: "thankyou", name: "Thank You", subject: "Thank you for attending {{event_name}}" },
  ];

  const handleSendMessage = () => {
    console.log("Sending message:", newMessage);
    // Handle message sending
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Sent":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Scheduled":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "Draft":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "email":
        return <Mail className="w-4 h-4" />;
      case "sms":
        return <MessageSquare className="w-4 h-4" />;
      case "notification":
        return <Bell className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

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
            Communications
          </h1>
          <p className="text-gray-400 mt-2">Send announcements, manage chats, and engage with attendees</p>
        </div>
        <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700">
          <Plus className="w-4 h-4 mr-2" />
          New Message
        </Button>
      </motion.div>

      {/* Event Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Select Event</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {events.map((event) => (
                <Button
                  key={event.id}
                  variant={selectedEvent === event.id ? "default" : "outline"}
                  onClick={() => setSelectedEvent(event.id)}
                  className={`h-auto p-4 flex flex-col space-y-2 ${
                    selectedEvent === event.id
                      ? "bg-violet-500 hover:bg-violet-600"
                      : "border-gray-700 text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  <span className="font-semibold">{event.name}</span>
                  <span className="text-sm opacity-80">{event.attendees} attendees</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Tabs defaultValue="broadcast" className="space-y-6">
          <TabsList className="bg-gray-900/50 border border-gray-800 grid grid-cols-4">
            <TabsTrigger value="broadcast" className="data-[state=active]:bg-violet-500">
              Broadcast
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-violet-500">
              Message History
            </TabsTrigger>
            <TabsTrigger value="chat" className="data-[state=active]:bg-violet-500">
              Live Chat
            </TabsTrigger>
            <TabsTrigger value="templates" className="data-[state=active]:bg-violet-500">
              Templates
            </TabsTrigger>
          </TabsList>

          <TabsContent value="broadcast">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Send className="w-5 h-5 mr-2 text-violet-400" />
                      Compose Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-white">Message Type</Label>
                        <Select value={newMessage.type} onValueChange={(value) => setNewMessage(prev => ({ ...prev, type: value }))}>
                          <SelectTrigger className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="sms">SMS</SelectItem>
                            <SelectItem value="notification">Push Notification</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-white">Recipients</Label>
                        <Select value={newMessage.recipients} onValueChange={(value) => setNewMessage(prev => ({ ...prev, recipients: value }))}>
                          <SelectTrigger className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            <SelectItem value="all">All Attendees (234)</SelectItem>
                            <SelectItem value="confirmed">Confirmed Only (189)</SelectItem>
                            <SelectItem value="vip">VIP Tickets (45)</SelectItem>
                            <SelectItem value="waitlist">Waitlist (12)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-white">Subject</Label>
                      <Input
                        id="subject"
                        value={newMessage.subject}
                        onChange={(e) => setNewMessage(prev => ({ ...prev, subject: e.target.value }))}
                        placeholder="Enter message subject"
                        className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="content" className="text-white">Message Content</Label>
                      <Textarea
                        id="content"
                        value={newMessage.content}
                        onChange={(e) => setNewMessage(prev => ({ ...prev, content: e.target.value }))}
                        placeholder="Write your message..."
                        rows={8}
                        className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white resize-none"
                      />
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button 
                        onClick={handleSendMessage}
                        className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Now
                      </Button>
                      <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                        <Clock className="w-4 h-4 mr-2" />
                        Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                        <Users className="w-6 h-6 text-violet-400 mx-auto mb-1" />
                        <p className="text-xl font-bold text-white">234</p>
                        <p className="text-gray-400 text-sm">Total Recipients</p>
                      </div>
                      <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                        <Mail className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                        <p className="text-xl font-bold text-white">12</p>
                        <p className="text-gray-400 text-sm">Messages Sent Today</p>
                      </div>
                      <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                        <Eye className="w-6 h-6 text-green-400 mx-auto mb-1" />
                        <p className="text-xl font-bold text-white">78%</p>
                        <p className="text-gray-400 text-sm">Avg. Open Rate</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Message History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-violet-500/50 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-violet-500/20 rounded-lg">
                          {getTypeIcon(message.type)}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{message.subject}</h3>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className="text-gray-400 text-sm">{message.recipients} recipients</span>
                            <span className="text-gray-400 text-sm">•</span>
                            <span className="text-gray-400 text-sm">{new Date(message.sentDate).toLocaleDateString()}</span>
                            {message.openRate !== "N/A" && (
                              <>
                                <span className="text-gray-400 text-sm">•</span>
                                <span className="text-green-400 text-sm">{message.openRate} open rate</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(message.status)}>
                          {message.status}
                        </Badge>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chat">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-violet-400" />
                  Live Event Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-80 bg-gray-800/30 rounded-lg p-4 overflow-y-auto">
                    <div className="space-y-3">
                      {chatMessages.map((chat, index) => (
                        <motion.div
                          key={chat.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <Avatar className="w-8 h-8 border border-violet-500/30">
                            <AvatarImage src={chat.avatar} />
                            <AvatarFallback className="bg-violet-500 text-white text-xs">
                              {chat.user.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <span className="text-white text-sm font-medium">{chat.user}</span>
                              <span className="text-gray-400 text-xs">{chat.timestamp}</span>
                            </div>
                            <p className="text-gray-300 text-sm mt-1">{chat.message}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Type a message..."
                      className="flex-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white"
                    />
                    <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white">Message Templates</CardTitle>
                  <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                    <Plus className="w-4 h-4 mr-2" />
                    New Template
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {templates.map((template, index) => (
                    <motion.div
                      key={template.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-violet-500/50 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-white font-semibold">{template.name}</h3>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400">
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{template.subject}</p>
                      <Button size="sm" className="bg-violet-500/20 text-violet-400 hover:bg-violet-500/30 border border-violet-500/30">
                        Use Template
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Communications;