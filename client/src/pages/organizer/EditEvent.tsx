import { useState} from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, Save, Eye, Trash2, Users, Upload, X, Image } from "lucide-react";

const EditEvent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "Tech Conference 2024",
    description: "Annual technology conference featuring industry leaders and cutting-edge innovations",
    date: "2024-03-15",
    time: "09:00",
    location: "San Francisco Convention Center",
    category: "conference",
    capacity: "500",
    ticketPrice: "20.00",
    earlyBirdPrice: "15.00",
    isPublic: true,
    allowWaitlist: true,
    requireApproval: false,
    status: "Published",
    bannerImage: null as File | null,
    bannerPreview: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=600&fit=crop"
  });

  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageFile(e.dataTransfer.files[0]);
    }
  };

  const handleImageFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          bannerImage: file,
          bannerPreview: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    } else {
    //   toast({
    //     title: "Invalid file type",
    //     description: "Please select an image file (PNG, JPG, JPEG)",
    //     variant: "destructive"
    //   });
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleImageFile(e.target.files[0]);
    }
  };

  const removeBanner = () => {
    setFormData(prev => ({
      ...prev,
      bannerImage: null,
      bannerPreview: ""
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating event:", formData);
    // toast({
    //   title: "Event Updated",
    //   description: "Your event has been updated successfully!",
    // });
    navigate("/organiser/events");
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this event? This action cannot be undone.")) {
      console.log("Deleting event:", id);
    //   toast({
    //     title: "Event Deleted",
    //     description: "The event has been deleted successfully.",
    //   });
      navigate("/organiser/events");
    }
  };

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

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/organiser/events")}
              className="text-violet-400 hover:text-white hover:bg-violet-900/30 border border-violet-500/30"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Button>
            <div>
              <div className="flex items-center space-x-3">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Edit Event
                </h1>
                <Badge className={getStatusColor(formData.status)}>
                  {formData.status}
                </Badge>
              </div>
              <p className="text-gray-400 mt-2">Modify your event details and settings</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <Button 
              variant="outline"
              onClick={handleDelete}
              className="border-red-500/50 text-red-400 hover:bg-red-900/30 hover:border-red-400"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </Button>
            <Button 
              variant="outline" 
              className="border-violet-500/50 text-violet-300 hover:bg-violet-900/30 hover:border-violet-400"
            >
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button 
              onClick={handleSubmit}
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </motion.div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Banner Upload */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-gray-900/80 border-violet-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Image className="w-5 h-5 mr-2 text-violet-400" />
                    Event Banner
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {formData.bannerPreview ? (
                    <div className="relative">
                      <img 
                        src={formData.bannerPreview} 
                        alt="Event banner preview" 
                        className="w-full h-48 object-cover rounded-lg border border-violet-500/30"
                      />
                      <Button
                        type="button"
                        onClick={removeBanner}
                        className="absolute top-2 right-2 bg-red-500/80 hover:bg-red-600 text-white p-2 h-auto"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                      <div className="absolute bottom-2 left-2">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileSelect}
                          className="hidden"
                          id="banner-replace"
                        />
                        <label htmlFor="banner-replace">
                          <Button 
                            type="button" 
                            className="bg-violet-600/80 hover:bg-violet-700 text-white text-xs p-2 h-auto"
                            onClick={() => document.getElementById('banner-replace')?.click()}
                          >
                            Replace
                          </Button>
                        </label>
                      </div>
                    </div>
                  ) : (
                    <div 
                      className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                        dragActive 
                          ? 'border-violet-400 bg-violet-900/20' 
                          : 'border-violet-500/50 hover:border-violet-400 hover:bg-violet-900/10'
                      }`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      <Upload className="w-12 h-12 text-violet-400 mx-auto mb-4" />
                      <p className="text-white text-lg mb-2">Drop your event banner here</p>
                      <p className="text-gray-400 text-sm mb-4">or click to browse files</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        className="hidden"
                        id="banner-upload"
                      />
                      <label htmlFor="banner-upload">
                        <Button 
                          type="button" 
                          className="bg-violet-600 hover:bg-violet-700 text-white"
                          onClick={() => document.getElementById('banner-upload')?.click()}
                        >
                          Select Image
                        </Button>
                      </label>
                      <p className="text-gray-500 text-xs mt-2">PNG, JPG up to 5MB • Recommended: 1920x600px</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Basic Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-gray-900/80 border-violet-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-violet-400" />
                    Basic Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="title" className="text-white text-sm font-medium">Event Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      placeholder="Enter your event title"
                      className="mt-2 bg-black/50 border-violet-500/50 focus:border-violet-400 text-white placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="description" className="text-white text-sm font-medium">Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Describe your event in detail..."
                      rows={4}
                      className="mt-2 bg-black/50 border-violet-500/50 focus:border-violet-400 text-white placeholder:text-gray-500 resize-none"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="category" className="text-white text-sm font-medium">Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger className="mt-2 bg-black/50 border-violet-500/50 focus:border-violet-400 text-white">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-violet-500/30">
                          <SelectItem value="conference">Conference</SelectItem>
                          <SelectItem value="workshop">Workshop</SelectItem>
                          <SelectItem value="seminar">Seminar</SelectItem>
                          <SelectItem value="networking">Networking</SelectItem>
                          <SelectItem value="training">Training</SelectItem>
                          <SelectItem value="webinar">Webinar</SelectItem>
                          <SelectItem value="meetup">Meetup</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="location" className="text-white text-sm font-medium">Location *</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        placeholder="Event location or Virtual"
                        className="mt-2 bg-black/50 border-violet-500/50 focus:border-violet-400 text-white placeholder:text-gray-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="date" className="text-white text-sm font-medium">Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        className="mt-2 bg-black/50 border-violet-500/50 focus:border-violet-400 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="time" className="text-white text-sm font-medium">Time *</Label>
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => handleInputChange("time", e.target.value)}
                        className="mt-2 bg-black/50 border-violet-500/50 focus:border-violet-400 text-white"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Ticketing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-gray-900/80 border-violet-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Ticketing & Capacity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="capacity" className="text-white text-sm font-medium">Event Capacity *</Label>
                      <Input
                        id="capacity"
                        type="number"
                        value={formData.capacity}
                        onChange={(e) => handleInputChange("capacity", e.target.value)}
                        placeholder="Maximum attendees"
                        className="mt-2 bg-black/50 border-violet-500/50 focus:border-violet-400 text-white placeholder:text-gray-500"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="ticketPrice" className="text-white text-sm font-medium">Ticket Price ($) *</Label>
                      <Input
                        id="ticketPrice"
                        type="number"
                        step="0.01"
                        value={formData.ticketPrice}
                        onChange={(e) => handleInputChange("ticketPrice", e.target.value)}
                        placeholder="0.00"
                        className="mt-2 bg-black/50 border-violet-500/50 focus:border-violet-400 text-white placeholder:text-gray-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="earlyBirdPrice" className="text-white text-sm font-medium">Early Bird Price ($)</Label>
                    <Input
                      id="earlyBirdPrice"
                      type="number"
                      step="0.01"
                      value={formData.earlyBirdPrice}
                      onChange={(e) => handleInputChange("earlyBirdPrice", e.target.value)}
                      placeholder="Optional early bird pricing"
                      className="mt-2 bg-black/50 border-violet-500/50 focus:border-violet-400 text-white placeholder:text-gray-500"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Settings Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="bg-gray-900/80 border-violet-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Event Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-white text-sm font-medium">Status</Label>
                    <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
                      <SelectTrigger className="mt-2 bg-black/50 border-violet-500/50 focus:border-violet-400 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-violet-500/30">
                        <SelectItem value="Draft">Draft</SelectItem>
                        <SelectItem value="Published">Published</SelectItem>
                        <SelectItem value="Cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-violet-500/20">
                    <div>
                      <Label className="text-white font-medium">Public Event</Label>
                      <p className="text-sm text-gray-400">Make event visible to everyone</p>
                    </div>
                    <Switch
                      checked={formData.isPublic}
                      onCheckedChange={(checked) => handleInputChange("isPublic", checked)}
                      className="data-[state=checked]:bg-violet-500"
                    />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-violet-500/20">
                    <div>
                      <Label className="text-white font-medium">Allow Waitlist</Label>
                      <p className="text-sm text-gray-400">Enable waitlist when sold out</p>
                    </div>
                    <Switch
                      checked={formData.allowWaitlist}
                      onCheckedChange={(checked) => handleInputChange("allowWaitlist", checked)}
                      className="data-[state=checked]:bg-violet-500"
                    />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-violet-500/20">
                    <div>
                      <Label className="text-white font-medium">Require Approval</Label>
                      <p className="text-sm text-gray-400">Manually approve registrations</p>
                    </div>
                    <Switch
                      checked={formData.requireApproval}
                      onCheckedChange={(checked) => handleInputChange("requireApproval", checked)}
                      className="data-[state=checked]:bg-violet-500"
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
              <Card className="bg-gray-900/80 border-violet-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Users className="w-5 h-5 mr-2 text-violet-400" />
                    Event Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between p-3 bg-black/30 rounded-lg border border-violet-500/20">
                      <span className="text-gray-400">Tickets Sold:</span>
                      <span className="text-white font-semibold">234 / 500</span>
                    </div>
                    <div className="flex justify-between p-3 bg-black/30 rounded-lg border border-violet-500/20">
                      <span className="text-gray-400">Revenue:</span>
                      <span className="text-green-400 font-semibold">$4,680</span>
                    </div>
                    <div className="flex justify-between p-3 bg-black/30 rounded-lg border border-violet-500/20">
                      <span className="text-gray-400">Waitlist:</span>
                      <span className="text-white font-semibold">12</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 mt-4">
                      <div 
                        className="bg-gradient-to-r from-violet-500 to-purple-600 h-3 rounded-full transition-all duration-300" 
                        style={{ width: '47%' }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-400 text-center font-medium">47% capacity filled</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEvent;