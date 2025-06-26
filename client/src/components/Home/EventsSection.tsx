import { motion } from "framer-motion";
import EventCard from "./EventCard";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  price: string;
  attendees: number;
  category: string;
}

interface EventsSectionProps {
  title: string;
  subtitle: string;
  events: Event[];
}

const EventsSection = ({ title, subtitle, events }: EventsSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent"
        >
          {title}
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-gray-400 text-center mb-12 text-lg"
        >
          {subtitle}
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard 
              key={event.id} 
              event={event} 
              variants={itemVariants}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EventsSection;