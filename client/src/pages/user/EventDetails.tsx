import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, MapPin, Users, Heart, Share2, Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate, useParams } from "react-router-dom";

const EventDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock event data
  const event = {
    id: 1,
    title: "Exclusive Jazz Night Under the Stars",
    date: "Saturday, December 23, 2024",
    time: "8:00 PM - 12:00 AM",
    location: "Rooftop Terrace, The Grand Hotel",
    address: "123 Luxury Avenue, New York, NY 10001",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=2000&q=80",
    price: 150,
    availability: "22 spots left",
    attendees: 78,
    host: {
      name: "Elite Events Co.",
      rating: 4.9,
      events: 127,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
    },
    description: `Immerse yourself in an unforgettable evening of sophisticated jazz music beneath a canopy of stars. This exclusive event features world-renowned jazz musicians performing on a stunning rooftop terrace with panoramic city views.

Experience the golden age of jazz with carefully curated performances, premium cocktails, and gourmet hors d'oeuvres. The evening promises to be a perfect blend of musical excellence and luxury hospitality.

Join fellow jazz enthusiasts for this intimate gathering limited to 100 guests, ensuring an exclusive and memorable experience for all attendees.`,
    highlights: [
      "Live performance by Grammy-nominated jazz quartet",
      "Gourmet canapés and hors d'oeuvres",
      "Exclusive networking opportunity",
      "Premium open bar with signature cocktails",
      "Panoramic city skyline views"
    ],
    tags: ["Jazz", "Rooftop", "Premium", "Live Music", "Cocktails"]
  };

  const attendees = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Guest ${i + 1}`,
    avatar: `https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=100&q=80`
  }));

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-violet-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-white hover:text-violet-400 hover:bg-violet-500/10"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`${isWishlisted ? 'text-violet-400' : 'text-gray-400'} hover:text-violet-400`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-violet-400">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="pt-16">
        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-96 md:h-[500px] overflow-hidden"
        >
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <Badge className="bg-violet-500 text-white mb-4">Premium Experience</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{event.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-violet-400" />
                {event.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-violet-400" />
                {event.time}
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-violet-400" />
                {event.location}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About This Event */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">About This Event</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  {event.description.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </motion.section>

              {/* Event Highlights */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Event Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Tags */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Tags</h2>
                <div className="flex flex-wrap gap-3">
                  {event.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="border-violet-500/30 text-violet-400 hover:bg-violet-500/10 px-4 py-2"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.section>

              {/* Location */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Location</h2>
                <Card className="bg-gradient-to-br from-gray-900 to-black border-violet-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-violet-400 mt-1" />
                      <div>
                        <h3 className="text-white font-semibold mb-1">{event.location}</h3>
                        <p className="text-gray-400">{event.address}</p>
                      </div>
                    </div>
                    <div className="mt-6 h-48 bg-gray-800 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <MapPin className="w-12 h-12 mx-auto mb-2" />
                        <p>Interactive map will be displayed here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Booking Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="bg-gradient-to-br from-gray-900 to-black border-violet-500/20 sticky top-24">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-white mb-2">
                        ${event.price}
                        <span className="text-lg text-gray-400 font-normal">per person</span>
                      </div>
                      <div className="text-violet-400 font-medium">Availability</div>
                      <div className="text-sm text-gray-400">{event.availability}</div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white text-lg py-6 rounded-full mb-4 transform hover:scale-105 transition-all duration-300">
                      Book This Event
                    </Button>
                    
                    <p className="text-xs text-gray-400 text-center">
                      Free cancellation up to 24 hours before the event
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Host Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="bg-gradient-to-br from-gray-900 to-black border-violet-500/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Hosted by</h3>
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={event.host.image} />
                        <AvatarFallback className="bg-violet-500/20 text-violet-400">
                          <User className="w-6 h-6" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="text-white font-semibold">{event.host.name}</h4>
                        <div className="flex items-center text-sm text-gray-400">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          {event.host.rating} • {event.host.events} events
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full border-violet-500/30 text-violet-400 hover:bg-violet-500/10">
                      View Profile
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Who's Going - Updated to match reference */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="bg-gradient-to-br from-gray-900 to-black border-violet-500/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Who's Going</h3>
                    <div className="flex items-center space-x-2 mb-4 text-violet-400">
                      <Users className="w-5 h-5" />
                      <span className="font-medium">{event.attendees} people attending</span>
                    </div>
                    
                    {/* Avatar Grid - 6 columns layout */}
                    <div className="grid grid-cols-6 gap-2 mb-4">
                      {attendees.map((attendee) => (
                        <div key={attendee.id} className="relative group">
                          <Avatar className="w-12 h-12 border-2 border-violet-500/30 hover:border-violet-400/60 transition-all duration-300 group-hover:scale-110">
                            <AvatarImage src={attendee.avatar} className="object-cover" />
                            <AvatarFallback className="bg-violet-500/20 text-violet-400 text-xs font-medium">
                              {attendee.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          {/* Tooltip on hover */}
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                            {attendee.name}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* More attendees indicator */}
                    <div className="text-center border-t border-violet-500/20 pt-4">
                      <span className="text-gray-400 text-sm">+66 more attendees</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Mobile Book Button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-black/90 backdrop-blur-lg border-t border-violet-500/20">
        <Button className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white text-lg py-4 rounded-full">
          Book Now - ${event.price}
        </Button>
      </div>
    </div>
  );
};

export default EventDetails;
