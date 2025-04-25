import { useState } from 'react';
import { Search, Menu, X , Sparkle} from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // Add your search functionality here
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span><Sparkle size={30} className="text-red-500 fill-red-500" /></span>
              <span className="ml-2 text-2xl font-bold text-gray-900">Kanra</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                onClick={handleSearch}
                className="absolute left-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                <Search size={18} />
              </button>
            </div>
            <nav className="flex space-x-8 font-bold">
              <a href="/reviews" className="text-gray-600 border border-transparent px-4 py-2 rounded-md hover:border-red-500 hover:text-gray-900">Reviews</a>
              <a href="/destinations" className="text-gray-600 border border-transparent px-4 py-2 rounded-md hover:border-red-500 hover:text-gray-900">Destinations</a>
              <a href="/ticket" className="text-gray-600 border border-transparent px-4 py-2 rounded-md hover:border-red-500 hover:text-gray-900">Ticket</a>
              <a href="/blog" className="text-gray-600 border border-transparent px-4 py-2 rounded-md hover:border-red-500 hover:text-gray-900">Blog</a>
            </nav>
            <button className="bg-orange-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              Get the App
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <div className="mr-4 relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-2 py-1 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-32"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                onClick={handleSearch}
                className="absolute left-2 top-1.5 text-gray-400 hover:text-gray-600"
              >
                <Search size={16} />
              </button>
            </div>
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <a href="/reviews" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Reviews
            </a>
            <a href="/destinations" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Destinations
            </a>
            <a href="/ticket" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Ticket
            </a>
            <a href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Blog
            </a>
            <div className="pt-2">
              <button className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                Get the App
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}