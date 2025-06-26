const Footer = () => {
  return (
    <footer className="bg-black border-t border-violet-500/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-4">
              EventLux
            </h3>
            <p className="text-gray-400">Discover extraordinary experiences around you.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-violet-400 transition-colors">Browse Events</a>
              <a href="#" className="block text-gray-400 hover:text-violet-400 transition-colors">Categories</a>
              <a href="#" className="block text-gray-400 hover:text-violet-400 transition-colors">Locations</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Account</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-violet-400 transition-colors">My Bookings</a>
              <a href="#" className="block text-gray-400 hover:text-violet-400 transition-colors">Wishlist</a>
              <a href="#" className="block text-gray-400 hover:text-violet-400 transition-colors">Profile</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-violet-400 transition-colors">Help Center</a>
              <a href="#" className="block text-gray-400 hover:text-violet-400 transition-colors">Contact Us</a>
              <a href="#" className="block text-gray-400 hover:text-violet-400 transition-colors">Terms</a>
            </div>
          </div>
        </div>
        <div className="border-t border-violet-500/20 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 EventLux. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;