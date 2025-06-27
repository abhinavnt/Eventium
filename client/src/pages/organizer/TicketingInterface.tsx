import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Ticket, 
  Plus, 
  Edit, 
  Trash2, 
  Users, 
  DollarSign,
  Percent,
  Clock,
  Gift,
  X,
  Star,
  Crown,
  Zap,
  Calendar
} from "lucide-react";

interface TicketType {
  id: number;
  name: string;
  description: string;
  price: number;
  earlyBirdPrice: number;
  quantity: number;
  sold: number;
  status: string;
  perks: string[];
  type: string;
}

interface DiscountCode {
  code: string;
  discount: number;
  type: string;
  uses: number;
  limit: number;
  status: string;
}

const TicketingInterface = () => {
  const [selectedEvent, setSelectedEvent] = useState("tech-conference-2024");
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);


  const events = [
    { id: "tech-conference-2024", name: "Tech Conference 2024", date: "Mar 15, 2024" },
    { id: "marketing-summit", name: "Marketing Summit", date: "Mar 22, 2024" },
    { id: "design-workshop", name: "Design Workshop", date: "Apr 5, 2024" },
  ];

  const [ticketTypes, setTicketTypes] = useState<TicketType[]>([
    {
      id: 1,
      name: "General Admission",
      description: "Perfect for networking and learning from industry experts",
      price: 25.00,
      earlyBirdPrice: 20.00,
      quantity: 300,
      sold: 156,
      status: "Active",
      perks: ["Access to all sessions", "Networking lunch", "Event materials", "Certificate of attendance"],
      type: "General"
    },
    {
      id: 2,
      name: "VIP Premium",
      description: "Ultimate premium experience with exclusive perks",
      price: 75.00,
      earlyBirdPrice: 60.00,
      quantity: 50,
      sold: 23,
      status: "Active",
      perks: ["Priority seating", "VIP lounge access", "Meet & greet with speakers", "Welcome gift bag", "Premium networking dinner"],
      type: "VIP"
    },
    {
      id: 3,
      name: "Student Discount",
      description: "Special pricing for students with valid ID",
      price: 15.00,
      earlyBirdPrice: 12.00,
      quantity: 100,
      sold: 45,
      status: "Active",
      perks: ["Access to all sessions", "Student networking area", "Digital resources"],
      type: "Student"
    }
  ]);

  const [discountCodes, setDiscountCodes] = useState<DiscountCode[]>([
    { code: "EARLY2024", discount: 20, type: "percentage", uses: 45, limit: 100, status: "Active" },
    { code: "WELCOME10", discount: 10, type: "fixed", uses: 23, limit: 50, status: "Active" },
    { code: "STUDENT25", discount: 25, type: "percentage", uses: 12, limit: 30, status: "Paused" },
  ]);

  const [newTicket, setNewTicket] = useState({
    name: "",
    description: "",
    price: 0,
    earlyBirdPrice: 0,
    quantity: 0,
    type: "General",
    perks: [""]
  });

  const [newDiscount, setNewDiscount] = useState({
    code: "",
    discount: 0,
    type: "percentage",
    limit: 0
  });

  const handleAddTicket = () => {
    if (newTicket.name && newTicket.price > 0) {
      const ticket: TicketType = {
        id: Date.now(),
        ...newTicket,
        sold: 0,
        status: "Active",
        perks: newTicket.perks.filter(perk => perk.trim() !== "")
      };
      setTicketTypes([...ticketTypes, ticket]);
      setNewTicket({ name: "", description: "", price: 0, earlyBirdPrice: 0, quantity: 0, type: "General", perks: [""] });
      setIsTicketModalOpen(false);
    }
  };

  const handleAddDiscount = () => {
    if (newDiscount.code && newDiscount.discount > 0) {
      const discount: DiscountCode = {
        ...newDiscount,
        uses: 0,
        status: "Active"
      };
      setDiscountCodes([...discountCodes, discount]);
      setNewDiscount({ code: "", discount: 0, type: "percentage", limit: 0 });
      setIsDiscountModalOpen(false);
    }
  };

  const handleDeleteTicket = (id: number) => {
    setTicketTypes(ticketTypes.filter(ticket => ticket.id !== id));
  };

  const handleDeleteDiscount = (code: string) => {
    setDiscountCodes(discountCodes.filter(discount => discount.code !== code));
  };

  const handleToggleDiscountStatus = (code: string) => {
    setDiscountCodes(discountCodes.map(discount => 
      discount.code === code 
        ? { ...discount, status: discount.status === "Active" ? "Paused" : "Active" }
        : discount
    ));
  };

  const addPerk = () => {
    setNewTicket({ ...newTicket, perks: [...newTicket.perks, ""] });
  };

  const updatePerk = (index: number, value: string) => {
    const updatedPerks = [...newTicket.perks];
    updatedPerks[index] = value;
    setNewTicket({ ...newTicket, perks: updatedPerks });
  };

  const removePerk = (index: number) => {
    setNewTicket({ ...newTicket, perks: newTicket.perks.filter((_, i) => i !== index) });
  };

  const getTicketTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'vip': return Crown;
      case 'premium': return Star;
      case 'student': return Users;
      default: return Ticket;
    }
  };

  const getTicketTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'vip': return 'from-amber-500 to-orange-600';
      case 'premium': return 'from-violet-500 to-purple-600';
      case 'student': return 'from-emerald-500 to-teal-600';
      default: return 'from-blue-500 to-indigo-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-violet-950 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6"
        >
          <div className="space-y-2">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ticketing Management
            </h1>
            <p className="text-gray-400 text-lg">Create and manage your event tickets with advanced pricing options</p>
          </div>
          <Dialog open={isTicketModalOpen} onOpenChange={setIsTicketModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white border-0 shadow-lg shadow-violet-500/25 px-8 py-3 text-lg font-semibold">
                <Plus className="w-5 h-5 mr-2" />
                Create Ticket Type
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader className="border-b border-gray-700 pb-4">
                <DialogTitle className="text-2xl font-bold text-violet-400 flex items-center">
                  <Ticket className="w-6 h-6 mr-2" />
                  Create New Ticket Type
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6 pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-gray-300 font-medium">Ticket Name</Label>
                    <Input
                      value={newTicket.name}
                      onChange={(e) => setNewTicket({ ...newTicket, name: e.target.value })}
                      className="bg-gray-800 border-gray-600 text-white focus:border-violet-500 focus:ring-violet-500 h-12"
                      placeholder="e.g., VIP Premium Access"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300 font-medium">Ticket Category</Label>
                    <Select value={newTicket.type} onValueChange={(value) => setNewTicket({ ...newTicket, type: value })}>
                      <SelectTrigger className="bg-gray-800 border-gray-600 text-white h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        <SelectItem value="General">General Admission</SelectItem>
                        <SelectItem value="VIP">VIP Experience</SelectItem>
                        <SelectItem value="Premium">Premium Access</SelectItem>
                        <SelectItem value="Student">Student Discount</SelectItem>
                        <SelectItem value="Early Bird">Early Bird Special</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-300 font-medium">Description</Label>
                  <Textarea
                    value={newTicket.description}
                    onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })}
                    className="bg-gray-800 border-gray-600 text-white focus:border-violet-500 focus:ring-violet-500 min-h-[100px]"
                    placeholder="Describe what makes this ticket special..."
                  />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label className="text-gray-300 font-medium flex items-center">
                      <DollarSign className="w-4 h-4 mr-1 text-violet-400" />
                      Regular Price
                    </Label>
                    <Input
                      type="number"
                      value={newTicket.price}
                      onChange={(e) => setNewTicket({ ...newTicket, price: Number(e.target.value) })}
                      className="bg-gray-800 border-gray-600 text-white focus:border-violet-500 h-12"
                      placeholder="0.00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300 font-medium flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-orange-400" />
                      Early Bird Price
                    </Label>
                    <Input
                      type="number"
                      value={newTicket.earlyBirdPrice}
                      onChange={(e) => setNewTicket({ ...newTicket, earlyBirdPrice: Number(e.target.value) })}
                      className="bg-gray-800 border-gray-600 text-white focus:border-violet-500 h-12"
                      placeholder="0.00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300 font-medium flex items-center">
                      <Users className="w-4 h-4 mr-1 text-blue-400" />
                      Available Quantity
                    </Label>
                    <Input
                      type="number"
                      value={newTicket.quantity}
                      onChange={(e) => setNewTicket({ ...newTicket, quantity: Number(e.target.value) })}
                      className="bg-gray-800 border-gray-600 text-white focus:border-violet-500 h-12"
                      placeholder="100"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <Label className="text-gray-300 font-medium">Ticket Perks & Benefits</Label>
                  {newTicket.perks.map((perk, index) => (
                    <div key={index} className="flex gap-3">
                      <Input
                        value={perk}
                        onChange={(e) => updatePerk(index, e.target.value)}
                        className="bg-gray-800 border-gray-600 text-white focus:border-violet-500 h-12"
                        placeholder="Enter a benefit or perk..."
                      />
                      {newTicket.perks.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removePerk(index)}
                          className="text-red-400 hover:text-red-300 hover:bg-red-500/10 h-12 px-3"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={addPerk}
                    className="text-violet-400 hover:text-violet-300 hover:bg-violet-500/10 h-10"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Another Perk
                  </Button>
                </div>
                <div className="flex gap-4 pt-6 border-t border-gray-700">
                  <Button
                    onClick={handleAddTicket}
                    className="bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white border-0 px-8 py-3 font-semibold"
                  >
                    Create Ticket Type
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setIsTicketModalOpen(false)}
                    className="text-gray-400 hover:text-gray-300 hover:bg-gray-800 px-8 py-3"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>

        {/* Event Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="bg-gray-900/60 border-gray-700 backdrop-blur-sm shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-white text-xl flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-violet-400" />
                Select Event
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Button
                      variant={selectedEvent === event.id ? "default" : "outline"}
                      onClick={() => setSelectedEvent(event.id)}
                      className={`h-auto p-6 w-full flex flex-col items-start space-y-3 transition-all duration-300 ${
                        selectedEvent === event.id
                          ? "bg-gradient-to-r from-violet-600 to-purple-700 text-white shadow-lg shadow-violet-500/25 scale-105"
                          : "bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:border-violet-500/50"
                      }`}
                    >
                      <span className="font-semibold text-lg">{event.name}</span>
                      <span className="text-sm opacity-80 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {event.date}
                      </span>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Ticket Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-gray-900/60 border-gray-700 backdrop-blur-sm shadow-xl">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-white text-xl flex items-center">
                  <Ticket className="w-6 h-6 mr-2 text-violet-400" />
                  Ticket Types
                </CardTitle>
                <Badge className="bg-violet-500/20 text-violet-300 border-violet-500/30 px-3 py-1">
                  {ticketTypes.length} Types
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {ticketTypes.map((ticket, index) => {
                  const IconComponent = getTicketTypeIcon(ticket.type);
                  const gradientColor = getTicketTypeColor(ticket.type);
                  const soldPercentage = Math.round((ticket.sold / ticket.quantity) * 100);
                  
                  return (
                    <motion.div
                      key={ticket.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-violet-500/50 transition-all duration-300 backdrop-blur-sm shadow-lg"
                    >
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-3">
                            <div className={`p-3 rounded-lg bg-gradient-to-r ${gradientColor} shadow-lg`}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-white font-bold text-xl">{ticket.name}</h3>
                              <div className="flex items-center space-x-3 mt-1">
                                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                                  {ticket.status}
                                </Badge>
                                <Badge className={`bg-gradient-to-r ${gradientColor} text-white border-0 shadow-sm`}>
                                  {ticket.type}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-300 mb-4 text-lg leading-relaxed">{ticket.description}</p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {ticket.perks.map((perk, perkIndex) => (
                              <Badge key={perkIndex} className="bg-violet-500/10 text-violet-300 border-violet-500/20 px-3 py-1">
                                <Zap className="w-3 h-3 mr-1" />
                                {perk}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-violet-400 hover:bg-violet-500/10 p-2">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleDeleteTicket(ticket.id)}
                            className="text-gray-400 hover:text-red-400 hover:bg-red-500/10 p-2"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="text-center p-4 bg-gray-900/60 rounded-lg border border-gray-700">
                          <DollarSign className="w-6 h-6 text-violet-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-400 mb-1">Regular Price</p>
                          <p className="text-white font-bold text-xl">${ticket.price}</p>
                        </div>
                        <div className="text-center p-4 bg-gray-900/60 rounded-lg border border-gray-700">
                          <Clock className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-400 mb-1">Early Bird</p>
                          <p className="text-white font-bold text-xl">${ticket.earlyBirdPrice}</p>
                        </div>
                        <div className="text-center p-4 bg-gray-900/60 rounded-lg border border-gray-700">
                          <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-400 mb-1">Sold / Total</p>
                          <p className="text-white font-bold text-xl">{ticket.sold} / {ticket.quantity}</p>
                        </div>
                        <div className="text-center p-4 bg-gray-900/60 rounded-lg border border-gray-700">
                          <Percent className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-400 mb-1">Sold</p>
                          <p className="text-white font-bold text-xl">{soldPercentage}%</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Sales Progress</span>
                          <span className="text-violet-400 font-medium">{soldPercentage}% Complete</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                          <div 
                            className={`bg-gradient-to-r ${gradientColor} h-3 rounded-full transition-all duration-500 shadow-sm relative`}
                            style={{ width: `${soldPercentage}%` }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Discount Codes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-gray-900/60 border-gray-700 backdrop-blur-sm shadow-xl">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-white text-xl flex items-center">
                  <Gift className="w-6 h-6 mr-2 text-violet-400" />
                  Discount Codes
                </CardTitle>
                <Dialog open={isDiscountModalOpen} onOpenChange={setIsDiscountModalOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white border-0 shadow-lg shadow-emerald-500/25">
                      <Plus className="w-4 h-4 mr-2" />
                      Create Code
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl">
                    <DialogHeader className="border-b border-gray-700 pb-4">
                      <DialogTitle className="text-2xl font-bold text-emerald-400 flex items-center">
                        <Gift className="w-6 h-6 mr-2" />
                        Create Discount Code
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 pt-6">
                      <div className="space-y-2">
                        <Label className="text-gray-300 font-medium">Discount Code</Label>
                        <Input
                          value={newDiscount.code}
                          onChange={(e) => setNewDiscount({ ...newDiscount, code: e.target.value.toUpperCase() })}
                          className="bg-gray-800 border-gray-600 text-white focus:border-emerald-500 focus:ring-emerald-500 h-12 font-mono text-lg"
                          placeholder="e.g., SAVE20"
                        />
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label className="text-gray-300 font-medium">Discount Type</Label>
                          <Select value={newDiscount.type} onValueChange={(value) => setNewDiscount({ ...newDiscount, type: value })}>
                            <SelectTrigger className="bg-gray-800 border-gray-600 text-white h-12">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 border-gray-600">
                              <SelectItem value="percentage">Percentage (%)</SelectItem>
                              <SelectItem value="fixed">Fixed Amount ($)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-gray-300 font-medium">Discount Value</Label>
                          <Input
                            type="number"
                            value={newDiscount.discount}
                            onChange={(e) => setNewDiscount({ ...newDiscount, discount: Number(e.target.value) })}
                            className="bg-gray-800 border-gray-600 text-white focus:border-emerald-500 h-12"
                            placeholder={newDiscount.type === "percentage" ? "20" : "10"}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-gray-300 font-medium">Usage Limit</Label>
                        <Input
                          type="number"
                          value={newDiscount.limit}
                          onChange={(e) => setNewDiscount({ ...newDiscount, limit: Number(e.target.value) })}
                          className="bg-gray-800 border-gray-600 text-white focus:border-emerald-500 h-12"
                          placeholder="100"
                        />
                      </div>
                      <div className="flex gap-4 pt-6 border-t border-gray-700">
                        <Button
                          onClick={handleAddDiscount}
                          className="bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white border-0 px-8 py-3 font-semibold"
                        >
                          Create Code
                        </Button>
                        <Button
                          variant="ghost"
                          onClick={() => setIsDiscountModalOpen(false)}
                          className="text-gray-400 hover:text-gray-300 hover:bg-gray-800 px-8 py-3"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {discountCodes.map((code, index) => (
                  <motion.div
                    key={code.code}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-center justify-between p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm shadow-lg"
                  >
                    <div className="flex items-center space-x-6">
                      <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg shadow-lg">
                        <Gift className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-4 mb-2">
                          <h3 className="text-white font-bold text-xl font-mono">{code.code}</h3>
                          <Badge className={`${
                            code.status === "Active" 
                              ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                              : "bg-orange-500/20 text-orange-300 border-orange-500/30"
                          } px-3 py-1`}>
                            {code.status}
                          </Badge>
                        </div>
                        <p className="text-gray-300 text-lg">
                          <span className="font-semibold">
                            {code.type === "percentage" ? `${code.discount}% off` : `$${code.discount} off`}
                          </span>
                          <span className="mx-2">•</span>
                          <span>Used {code.uses}/{code.limit} times</span>
                          <span className="mx-2">•</span>
                          <span className="text-violet-400">{Math.round((code.uses / code.limit) * 100)}% utilized</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Switch 
                        checked={code.status === "Active"} 
                        onCheckedChange={() => handleToggleDiscountStatus(code.code)}
                      />
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-violet-400 hover:bg-violet-500/10 p-2">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleDeleteDiscount(code.code)}
                        className="text-gray-400 hover:text-red-400 hover:bg-red-500/10 p-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Waitlist Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="bg-gray-900/60 border-gray-700 backdrop-blur-sm shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-white text-xl flex items-center">
                <Users className="w-6 h-6 mr-2 text-violet-400" />
                Waitlist Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <div>
                  <Label className="text-white font-medium text-lg">Enable Waitlist</Label>
                  <p className="text-gray-400 mt-1">Allow attendees to join waitlist when tickets are sold out</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <div>
                  <Label className="text-white font-medium text-lg">Auto-notify Waitlist</Label>
                  <p className="text-gray-400 mt-1">Automatically notify when spots become available</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="space-y-3">
                <Label className="text-white font-medium text-lg">Waitlist Message</Label>
                <Textarea
                  placeholder="Enter personalized message for waitlisted attendees..."
                  className="bg-gray-800/50 border-gray-600 focus:border-violet-500 text-white resize-none min-h-[120px]"
                  rows={4}
                  defaultValue="Thank you for your interest in our event! You've been added to our priority waitlist and will be among the first to know when tickets become available. We'll send you an instant notification via email."
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default TicketingInterface;
