import CategoriesSection from "@/components/Home/CategoriesSection";
import EventsSection from "@/components/Home/EventsSection";
import HeroSection from "@/components/Home/HeroSection";
import Newsletter from "@/components/Home/Newsletter";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";


const HomePage = () => {
  const nearestEvents = [
    {
      id: 1,
      title: "Exclusive Jazz Night Under the Stars",
      date: "Dec 23, 2024",
      time: "8:00 PM",
      location: "Rooftop Terrace, The Grand Hotel",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      price: "$150",
      attendees: 78,
      category: "Music"
    },
    {
      id: 2,
      title: "Modern Art Gallery Opening",
      date: "Dec 25, 2024",
      time: "7:00 PM",
      location: "Downtown Art District",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      price: "$85",
      attendees: 124,
      category: "Art"
    },
    {
      id: 3,
      title: "Gourmet Wine Tasting Experience",
      date: "Dec 28, 2024",
      time: "6:30 PM",
      location: "Luxury Wine Cellar",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
      price: "$220",
      attendees: 45,
      category: "Food & Drinks"
    },
    {
      id: 4,
      title: "Tech Innovation Summit 2025",
      date: "Jan 12, 2025",
      time: "9:00 AM",
      location: "Convention Center",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      price: "$250",
      attendees: 300,
      category: "Business"
    },
    {
      id: 5,
      title: "Wellness & Mindfulness Retreat",
      date: "Jan 18, 2025",
      time: "10:00 AM",
      location: "Zen Garden Spa",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      price: "$180",
      attendees: 60,
      category: "Wellness"
    },
    {
      id: 6,
      title: "Culinary Masterclass with Chef Marco",
      date: "Jan 25, 2025",
      time: "3:00 PM",
      location: "The Culinary Institute",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
      price: "$200",
      attendees: 40,
      category: "Food & Drinks"
    }
  ];

  const recommendedEvents = [
    {
      id: 7,
      title: "Immersive Electronic Music Experience",
      date: "Feb 5, 2025",
      time: "9:00 PM",
      location: "Underground Club",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
      price: "$95",
      attendees: 200,
      category: "Music"
    },
    {
      id: 8,
      title: "Fashion Week Business Preview",
      date: "Feb 8, 2025",
      time: "6:00 PM",
      location: "Fashion District",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
      price: "$320",
      attendees: 150,
      category: "Business"
    },
    {
      id: 9,
      title: "Photography Workshop: Urban Landscapes",
      date: "Feb 12, 2025",
      time: "2:00 PM",
      location: "Modern Art Museum",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      price: "$140",
      attendees: 25,
      category: "Photography"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      
      <EventsSection 
        title="Nearest Events"
        subtitle="Discover premium experiences happening near you"
        events={nearestEvents}
      />

      <CategoriesSection />

      <EventsSection 
        title="Recommended For You"
        subtitle="Curated events based on your preferences"
        events={recommendedEvents}
      />

      <TestimonialsSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;