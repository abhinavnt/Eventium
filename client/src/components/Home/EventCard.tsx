import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom"

interface EventCardProps {
  event: {
    id: number
    title: string
    date: string
    time: string
    location: string
    image: string
    price: string
    attendees: number
    category: string
  }
  variants?: any
}

const EventCard = ({ event, variants }: EventCardProps) => {
  const navigate = useNavigate()

  return (
    <motion.div variants={variants} whileHover={{ y: -8 }} transition={{ duration: 0.6 }} className="group relative">
      <div className="relative overflow-hidden rounded-2xl bg-black border border-gray-800 hover:shadow-2xl hover:[box-shadow:0_30px_60px_-10px_rgba(139,92,246,0.45)]">
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-violet-500/90 backdrop-blur-sm text-white border-0 px-3 py-1 text-sm font-medium">
              {event.category}
            </Badge>
          </div>

          {/* Heart Icon */}
          <button className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors">
            <Heart className="w-5 h-5 text-white hover:text-violet-400 hover:fill-current transition-colors" />
          </button>

          {/* Price Badge */}
          <div className="absolute bottom-4 right-4">
            <div className="bg-violet-600 px-3 py-1 rounded-full">
              <span className="text-white font-bold text-lg">{event.price}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors line-clamp-2">
            {event.title}
          </h3>

          <div className="space-y-2 text-sm text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-3 text-violet-400" />
              {event.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-3 text-violet-400" />
              {event.time}
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-3 text-violet-400" />
              {event.location}
            </div>
          </div>

          <Button
            onClick={() => navigate(`/event/${event.id}`)}
            className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-xl py-3 text-base font-medium transition-all duration-300"
          >
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default EventCard
