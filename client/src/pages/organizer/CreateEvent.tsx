import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Clock,
  MapPin,
  Upload,
  ImageIcon,
  X,
  Plus,
  Ticket,
  DollarSign
} from "lucide-react";

interface TicketType {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  type: string;
}

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "",
    status: "Draft"
  });

  const [ticketTypes, setTicketTypes] = useState<TicketType[]>([
    {
      id: "1",
      name: "General Admission",
      price: 0,
      quantity: 100,
      description: "Standard access to the event",
      type: "General"
    }
  ]);

  const [bannerImage, setBannerImage] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setBannerImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0 && files[0].type.startsWith('image/')) {
      handleImageUpload(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const addTicketType = () => {
    const newTicket: TicketType = {
      id: Date.now().toString(),
      name: "",
      price: 0,
      quantity: 0,
      description: "",
      type: "General"
    };
    setTicketTypes([...ticketTypes, newTicket]);
  };

  const updateTicketType = (id: string, field: keyof TicketType, value: string | number) => {
    setTicketTypes(ticketTypes.map(ticket => 
      ticket.id === id ? { ...ticket, [field]: value } : ticket
    ));
  };

  const removeTicketType = (id: string) => {
    if (ticketTypes.length > 1) {
      setTicketTypes(ticketTypes.filter(ticket => ticket.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Event Data:", eventData);
    console.log("Ticket Types:", ticketTypes);
    console.log("Banner Image:", bannerImage);
    // Handle form submission here
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
          Create New Event
        </h1>
        <p className="text-gray-400 mt-2">Set up your event details and configure ticket options</p>
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Event Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <ImageIcon className="w-5 h-5 mr-2 text-violet-400" />
                Event Banner
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
                  isDragOver 
                    ? "border-violet-400 bg-violet-500/10" 
                    : bannerImage 
                      ? "border-gray-600" 
                      : "border-gray-700 hover:border-violet-500/50"
                }`}
                onDrop={handleDrop}
                onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                onDragLeave={() => setIsDragOver(false)}
              >
                {bannerImage ? (
                  <div className="relative">
                    <img
                      src={bannerImage}
                      alt="Event banner"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 bg-gray-900/80 hover:bg-gray-800 text-white"
                      onClick={() => setBannerImage(null)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="w-12 h-12 text-gray-500 mx-auto" />
                    <div>
                      <p className="text-white mb-2">Drop your banner image here</p>
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
                          variant="ghost"
                          className="bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-700"
                          asChild
                        >
                          <span>Choose Image</span>
                        </Button>
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Basic Event Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Event Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-gray-300">Event Title</Label>
                <Input
                  value={eventData.title}
                  onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
                  className="bg-gray-800 border-gray-700 text-white focus:border-violet-500"
                  placeholder="Enter event title"
                  required
                />
              </div>

              <div>
                <Label className="text-gray-300">Description</Label>
                <Textarea
                  value={eventData.description}
                  onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
                  className="bg-gray-800 border-gray-700 text-white focus:border-violet-500 min-h-[120px]"
                  placeholder="Describe your event..."
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label className="text-gray-300 flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-violet-400" />
                    Date
                  </Label>
                  <Input
                    type="date"
                    value={eventData.date}
                    onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
                    className="bg-gray-800 border-gray-700 text-white focus:border-violet-500"
                    required
                  />
                </div>

                <div>
                  <Label className="text-gray-300 flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-violet-400" />
                    Time
                  </Label>
                  <Input
                    type="time"
                    value={eventData.time}
                    onChange={(e) => setEventData({ ...eventData, time: e.target.value })}
                    className="bg-gray-800 border-gray-700 text-white focus:border-violet-500"
                    required
                  />
                </div>

                <div>
                  <Label className="text-gray-300">Category</Label>
                  <Select value={eventData.category} onValueChange={(value) => setEventData({ ...eventData, category: value })}>
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white focus:border-violet-500">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="conference">Conference</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="seminar">Seminar</SelectItem>
                      <SelectItem value="networking">Networking</SelectItem>
                      <SelectItem value="training">Training</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label className="text-gray-300 flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-violet-400" />
                  Location
                </Label>
                <Input
                  value={eventData.location}
                  onChange={(e) => setEventData({ ...eventData, location: e.target.value })}
                  className="bg-gray-800 border-gray-700 text-white focus:border-violet-500"
                  placeholder="Enter event location"
                  required
                />
              </div>

              <div>
                <Label className="text-gray-300">Event Status</Label>
                <Select value={eventData.status} onValueChange={(value) => setEventData({ ...eventData, status: value })}>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="Draft">Draft</SelectItem>
                    <SelectItem value="Published">Published</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Ticket Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-white flex items-center">
                  <Ticket className="w-5 h-5 mr-2 text-violet-400" />
                  Ticket Types
                </CardTitle>
                <Button
                  type="button"
                  onClick={addTicketType}
                  className="bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Ticket Type
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {ticketTypes.map((ticket, index) => (
                <div key={ticket.id} className="p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-white font-medium">Ticket Type {index + 1}</h4>
                    {ticketTypes.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeTicketType(ticket.id)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-gray-300">Ticket Name</Label>
                      <Input
                        value={ticket.name}
                        onChange={(e) => updateTicketType(ticket.id, 'name', e.target.value)}
                        className="bg-gray-800 border-gray-700 text-white focus:border-violet-500"
                        placeholder="e.g., VIP Premium"
                      />
                    </div>
                    
                    <div>
                      <Label className="text-gray-300">Ticket Type</Label>
                      <Select value={ticket.type} onValueChange={(value) => updateTicketType(ticket.id, 'type', value)}>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="General">General</SelectItem>
                          <SelectItem value="VIP">VIP</SelectItem>
                          <SelectItem value="Premium">Premium</SelectItem>
                          <SelectItem value="Student">Student</SelectItem>
                          <SelectItem value="Early Bird">Early Bird</SelectItem>
                          <SelectItem value="Group">Group</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label className="text-gray-300 flex items-center">
                        <DollarSign className="w-4 h-4 mr-1 text-violet-400" />
                        Price ($)
                      </Label>
                      <Input
                        type="number"
                        value={ticket.price}
                        onChange={(e) => updateTicketType(ticket.id, 'price', Number(e.target.value))}
                        className="bg-gray-800 border-gray-700 text-white focus:border-violet-500"
                        min="0"
                        step="0.01"
                      />
                    </div>
                    
                    <div>
                      <Label className="text-gray-300">Quantity Available</Label>
                      <Input
                        type="number"
                        value={ticket.quantity}
                        onChange={(e) => updateTicketType(ticket.id, 'quantity', Number(e.target.value))}
                        className="bg-gray-800 border-gray-700 text-white focus:border-violet-500"
                        min="1"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <Label className="text-gray-300">Description</Label>
                    <Textarea
                      value={ticket.description}
                      onChange={(e) => updateTicketType(ticket.id, 'description', e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white focus:border-violet-500"
                      placeholder="Describe what this ticket includes..."
                      rows={2}
                    />
                  </div>

                  <div className="mt-4 flex items-center space-x-2">
                    <Badge className="bg-violet-500/20 text-violet-400 border-violet-500/30">
                      {ticket.type}
                    </Badge>
                    {ticket.price === 0 && (
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        Free
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Submit Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 pt-6"
        >
          <Button
            type="submit"
            className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white border-0 px-8"
          >
            Create Event
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="text-gray-400 hover:text-gray-300 hover:bg-gray-800 px-8"
          >
            Save as Draft
          </Button>
        </motion.div>
      </form>
    </div>
  );
};

export default CreateEvent;