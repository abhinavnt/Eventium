import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Upload, 
  Download, 
  Star, 
  Award, 
  Camera,
  FileText,
  Share2,
  MessageCircle,
  BarChart3,
  Users,
  
} from "lucide-react";

const PostEventActions = () => {
  const [selectedEvent, setSelectedEvent] = useState("tech-conference-2024");

  const events = [
    { 
      id: "tech-conference-2024", 
      name: "Tech Conference 2024", 
      date: "Mar 15, 2024",
      status: "Completed",
      attendees: 234,
      rating: 4.8
    },
    { 
      id: "marketing-summit", 
      name: "Marketing Summit", 
      date: "Mar 22, 2024",
      status: "Completed",
      attendees: 156,
      rating: 4.6
    },
    { 
      id: "design-workshop", 
      name: "Design Workshop", 
      date: "Apr 5, 2024",
      status: "Upcoming",
      attendees: 89,
      rating: null
    },
  ];

  const feedbackData = [
    { rating: 5, count: 156, percentage: 67 },
    { rating: 4, count: 45, percentage: 19 },
    { rating: 3, count: 23, percentage: 10 },
    { rating: 2, count: 7, percentage: 3 },
    { rating: 1, count: 3, percentage: 1 },
  ];

  const completedTasks = [
    { task: "Event Photos Uploaded", completed: true, date: "Mar 16, 2024" },
    { task: "Attendee Feedback Collected", completed: true, date: "Mar 17, 2024" },
    { task: "Certificates Generated", completed: false, date: null },
    { task: "Thank You Emails Sent", completed: true, date: "Mar 18, 2024" },
    { task: "Event Report Generated", completed: false, date: null },
  ];

  const mediaFiles = [
    { name: "Opening Keynote", type: "video", size: "2.4 GB", duration: "45 min" },
    { name: "Panel Discussion", type: "video", size: "1.8 GB", duration: "60 min" },
    { name: "Event Photos", type: "photos", size: "450 MB", count: "127 photos" },
    { name: "Presentations", type: "documents", size: "125 MB", count: "12 files" },
  ];

  const selectedEventData = events.find(e => e.id === selectedEvent);

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
            Post-Event Actions
          </h1>
          <p className="text-gray-400 mt-2">Manage recordings, feedback, certificates, and follow-ups</p>
        </div>
        <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700">
          <Download className="w-4 h-4 mr-2" />
          Generate Report
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
              {events.filter(e => e.status === "Completed").map((event) => (
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
                  <div className="flex items-center space-x-2 text-sm opacity-80">
                    <span>{event.date}</span>
                    <span>•</span>
                    <span>{event.attendees} attendees</span>
                  </div>
                  {event.rating && (
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <span className="text-sm">{event.rating}</span>
                    </div>
                  )}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Event Overview */}
      {selectedEventData && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 text-violet-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{selectedEventData.attendees}</p>
              <p className="text-gray-400 text-sm">Attendees</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-4 text-center">
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{selectedEventData.rating || "N/A"}</p>
              <p className="text-gray-400 text-sm">Average Rating</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-4 text-center">
              <MessageCircle className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">234</p>
              <p className="text-gray-400 text-sm">Feedback Forms</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-4 text-center">
              <Award className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">187</p>
              <p className="text-gray-400 text-sm">Certificates Issued</p>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Tabs defaultValue="media" className="space-y-6">
          <TabsList className="bg-gray-900/50 border border-gray-800 grid grid-cols-5">
            <TabsTrigger value="media" className="data-[state=active]:bg-violet-500">
              Media
            </TabsTrigger>
            <TabsTrigger value="feedback" className="data-[state=active]:bg-violet-500">
              Feedback
            </TabsTrigger>
            <TabsTrigger value="certificates" className="data-[state=active]:bg-violet-500">
              Certificates
            </TabsTrigger>
            <TabsTrigger value="communications" className="data-[state=active]:bg-violet-500">
              Follow-up
            </TabsTrigger>
            <TabsTrigger value="tasks" className="data-[state=active]:bg-violet-500">
              Tasks
            </TabsTrigger>
          </TabsList>

          <TabsContent value="media">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-white flex items-center">
                      <Camera className="w-5 h-5 mr-2 text-violet-400" />
                      Upload Media
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-white">Event Recordings</Label>
                    <div className="mt-2 border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-violet-500/50 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400">Upload video recordings</p>
                      <p className="text-sm text-gray-500 mt-1">MP4, MOV up to 5GB each</p>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-white">Event Photos</Label>
                    <div className="mt-2 border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-violet-500/50 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400">Upload photo gallery</p>
                      <p className="text-sm text-gray-500 mt-1">JPG, PNG up to 50MB total</p>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-white">Presentation Files</Label>
                    <div className="mt-2 border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-violet-500/50 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400">Upload presentations & documents</p>
                      <p className="text-sm text-gray-500 mt-1">PDF, PPTX, DOCX up to 100MB</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Uploaded Media</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mediaFiles.map((file, index) => (
                      <motion.div
                        key={file.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-violet-500/20 rounded-lg">
                            {file.type === "video" && <Camera className="w-4 h-4 text-violet-400" />}
                            {file.type === "photos" && <Camera className="w-4 h-4 text-violet-400" />}
                            {file.type === "documents" && <FileText className="w-4 h-4 text-violet-400" />}
                          </div>
                          <div>
                            <p className="text-white font-medium">{file.name}</p>
                            <p className="text-gray-400 text-sm">
                              {file.size} • {file.duration || file.count}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                            <Share2 className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="feedback">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-violet-400" />
                    Feedback Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-white">4.8</div>
                      <div className="flex justify-center mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-current text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-400 mt-2">Based on 234 responses</p>
                    </div>
                    
                    {feedbackData.map((item, index) => (
                      <motion.div
                        key={item.rating}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="flex items-center space-x-1 w-12">
                          <span className="text-white text-sm">{item.rating}</span>
                          <Star className="w-3 h-3 text-yellow-400" />
                        </div>
                        <div className="flex-1">
                          <Progress value={item.percentage} className="h-2" />
                        </div>
                        <div className="text-sm text-gray-400 w-16 text-right">
                          {item.count} ({item.percentage}%)
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Recent Comments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-gray-800/30 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-3 h-3 fill-current text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-300 text-sm">
                        "Excellent event with great speakers and networking opportunities. Looking forward to next year!"
                      </p>
                      <p className="text-gray-500 text-xs mt-2">- Sarah Johnson</p>
                    </div>
                    
                    <div className="p-3 bg-gray-800/30 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="w-3 h-3 fill-current text-yellow-400" />
                        ))}
                        <Star className="w-3 h-3 text-yellow-400" />
                      </div>
                      <p className="text-gray-300 text-sm">
                        "Well organized event. The venue was perfect and the content was very valuable."
                      </p>
                      <p className="text-gray-500 text-xs mt-2">- Mike Chen</p>
                    </div>
                    
                    <div className="p-3 bg-gray-800/30 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-3 h-3 fill-current text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-300 text-sm">
                        "Amazing experience! The workshops were incredibly helpful and the organization was flawless."
                      </p>
                      <p className="text-gray-500 text-xs mt-2">- Emily Davis</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="certificates">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Award className="w-5 h-5 mr-2 text-violet-400" />
                  Certificate Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-white">Certificate Template</Label>
                    <div className="mt-2 border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-violet-500/50 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400">Upload certificate template</p>
                      <p className="text-sm text-gray-500 mt-1">PDF, PNG recommended</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white">Certificate Title</Label>
                      <Input
                        placeholder="Certificate of Attendance"
                        className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white"
                      />
                    </div>
                    
                    <div>
                      <Label className="text-white">Description</Label>
                      <Textarea
                        placeholder="This certifies that [NAME] has successfully attended..."
                        rows={4}
                        className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white resize-none"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                  <div>
                    <p className="text-white font-semibold">Certificate Status</p>
                    <p className="text-gray-400 text-sm">187 of 234 certificates generated</p>
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                      Preview
                    </Button>
                    <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700">
                      Generate All
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="communications">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Follow-up Communications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-white">Thank You Message</Label>
                  <Textarea
                    placeholder="Thank you for attending our event..."
                    rows={4}
                    className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white resize-none"
                    defaultValue="Thank you for attending Tech Conference 2024! We hope you found the sessions valuable and enjoyed networking with fellow attendees. Please find attached your certificate of attendance and event materials."
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-white">Include Attachments</Label>
                    <div className="mt-2 space-y-2">
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="form-checkbox" defaultChecked />
                        <span className="text-gray-300">Certificate of Attendance</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="form-checkbox" defaultChecked />
                        <span className="text-gray-300">Event Presentations</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="text-gray-300">Event Photos</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="text-gray-300">Event Recordings</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-white">Send to</Label>
                    <div className="mt-2 space-y-2">
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="form-checkbox" defaultChecked />
                        <span className="text-gray-300">All Attendees (234)</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="text-gray-300">VIP Attendees (45)</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="text-gray-300">Speakers (8)</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3">
                  <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                    Schedule for Later
                  </Button>
                  <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700">
                    Send Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tasks">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Post-Event Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {completedTasks.map((task, index) => (
                    <motion.div
                      key={task.task}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-700"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          task.completed ? "bg-green-500" : "bg-gray-600"
                        }`}>
                          {task.completed && <span className="text-white text-xs">✓</span>}
                        </div>
                        <div>
                          <h3 className={`font-medium ${task.completed ? "text-white" : "text-gray-400"}`}>
                            {task.task}
                          </h3>
                          {task.date && (
                            <p className="text-gray-500 text-sm">Completed on {task.date}</p>
                          )}
                        </div>
                      </div>
                      {!task.completed && (
                        <Button size="sm" className="bg-violet-500 hover:bg-violet-600">
                          Complete
                        </Button>
                      )}
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

export default PostEventActions;