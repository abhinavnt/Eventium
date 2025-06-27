import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Save,
  Upload,
  Twitter,
  Instagram,
  Linkedin,
  Facebook
} from "lucide-react";

const ProfileManagement = () => {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    company: "EventPro Organizers",
    title: "Senior Event Manager",
    bio: "Passionate event organizer with 8+ years of experience creating memorable experiences. Specializing in tech conferences, corporate events, and community gatherings.",
    website: "https://johndoe.events",
    location: "San Francisco, CA",
    twitter: "@johndoe",
    linkedin: "johndoe",
    instagram: "@johndoe_events",
    facebook: "johndoe.events"
  });

  const [notifications, setNotifications] = useState({
    emailMarketing: true,
    pushNotifications: true,
    smsReminders: false,
    weeklyReports: true,
    eventUpdates: true
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (field: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Saving profile:", profileData);
    console.log("Saving notifications:", notifications);
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
            Profile Management
          </h1>
          <p className="text-gray-400 mt-2">Manage your personal information and preferences</p>
        </div>
        <Button 
          onClick={handleSave}
          className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <User className="w-5 h-5 mr-2 text-violet-400" />
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Full Name</Label>
                    <Input
                      id="name"
                      value={profileData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-white">Phone</Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location" className="text-white">Location</Label>
                    <Input
                      id="location"
                      value={profileData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-white">Company</Label>
                    <Input
                      id="company"
                      value={profileData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="title" className="text-white">Job Title</Label>
                    <Input
                      id="title"
                      value={profileData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="bio" className="text-white">Bio</Label>
                  <Textarea
                    id="bio"
                    value={profileData.bio}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    rows={4}
                    className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white resize-none"
                    placeholder="Tell us about yourself..."
                  />
                </div>
                <div>
                  <Label htmlFor="website" className="text-white">Website</Label>
                  <Input
                    id="website"
                    value={profileData.website}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                    className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Social Media Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white flex items-center">
                      <Twitter className="w-4 h-4 mr-2 text-blue-400" />
                      Twitter
                    </Label>
                    <Input
                      value={profileData.twitter}
                      onChange={(e) => handleInputChange("twitter", e.target.value)}
                      className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white"
                      placeholder="@username"
                    />
                  </div>
                  <div>
                    <Label className="text-white flex items-center">
                      <Linkedin className="w-4 h-4 mr-2 text-blue-600" />
                      LinkedIn
                    </Label>
                    <Input
                      value={profileData.linkedin}
                      onChange={(e) => handleInputChange("linkedin", e.target.value)}
                      className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white"
                      placeholder="username"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white flex items-center">
                      <Instagram className="w-4 h-4 mr-2 text-pink-500" />
                      Instagram
                    </Label>
                    <Input
                      value={profileData.instagram}
                      onChange={(e) => handleInputChange("instagram", e.target.value)}
                      className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white"
                      placeholder="@username"
                    />
                  </div>
                  <div>
                    <Label className="text-white flex items-center">
                      <Facebook className="w-4 h-4 mr-2 text-blue-500" />
                      Facebook
                    </Label>
                    <Input
                      value={profileData.facebook}
                      onChange={(e) => handleInputChange("facebook", e.target.value)}
                      className="mt-1 bg-gray-800/50 border-gray-700 focus:border-violet-500 text-white"
                      placeholder="page-name"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Profile Picture</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-violet-500/30">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback className="bg-violet-500 text-white text-xl">
                    {profileData.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Photo
                </Button>
                <p className="text-xs text-gray-500 mt-2">PNG, JPG up to 2MB</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-white">Email Marketing</Label>
                    <p className="text-sm text-gray-400">Promotional emails and updates</p>
                  </div>
                  <Switch
                    checked={notifications.emailMarketing}
                    onCheckedChange={(checked) => handleNotificationChange("emailMarketing", checked)}
                  />
                </div>
                <Separator className="bg-gray-700" />
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-white">Push Notifications</Label>
                    <p className="text-sm text-gray-400">Real-time event updates</p>
                  </div>
                  <Switch
                    checked={notifications.pushNotifications}
                    onCheckedChange={(checked) => handleNotificationChange("pushNotifications", checked)}
                  />
                </div>
                <Separator className="bg-gray-700" />
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-white">SMS Reminders</Label>
                    <p className="text-sm text-gray-400">Text message alerts</p>
                  </div>
                  <Switch
                    checked={notifications.smsReminders}
                    onCheckedChange={(checked) => handleNotificationChange("smsReminders", checked)}
                  />
                </div>
                <Separator className="bg-gray-700" />
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-white">Weekly Reports</Label>
                    <p className="text-sm text-gray-400">Performance summaries</p>
                  </div>
                  <Switch
                    checked={notifications.weeklyReports}
                    onCheckedChange={(checked) => handleNotificationChange("weeklyReports", checked)}
                  />
                </div>
                <Separator className="bg-gray-700" />
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-white">Event Updates</Label>
                    <p className="text-sm text-gray-400">Changes and announcements</p>
                  </div>
                  <Switch
                    checked={notifications.eventUpdates}
                    onCheckedChange={(checked) => handleNotificationChange("eventUpdates", checked)}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Account Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Member Since:</span>
                  <span className="text-white">Jan 2022</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Events Created:</span>
                  <span className="text-white">24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Attendees:</span>
                  <span className="text-white">1,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Average Rating:</span>
                  <span className="text-white">4.8 ⭐</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProfileManagement;