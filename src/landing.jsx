import { useState } from 'react';
import { Play } from 'lucide-react';
import mainImg from './assets/mainImg.jpg';
import LiveSupportBadge from './badge';
import { Avatar, AvatarGroup } from '@mui/material';
import { Icon } from '@iconify/react';
import { 
  FaCompass,
  FaCloud,
  FaPaperPlane,
  FaUmbrellaBeach,
  FaSuitcase,
  FaMapMarkerAlt,
  FaRoute,
  FaCamera,
  FaPassport,
  FaMountain,
  FaShip
} from 'react-icons/fa';

export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Doodle section */}
      <FaCompass className="absolute left-4 md:left-8 top-12 md:top-20 text-blue-500 text-xl md:text-3xl animate-float-1" />
      <FaCloud className="absolute right-6 md:right-24 top-16 md:top-28 text-gray-300 text-2xl md:text-4xl animate-float-2" />
      
      <FaPaperPlane className="hidden sm:block absolute left-1/4 top-1/3 text-orange-500 text-xl md:text-2xl animate-float-3" />
      <FaMapMarkerAlt className="absolute right-4 sm:right-16 top-24 sm:top-40 text-green-500 text-xl md:text-2xl animate-float-4" />
      <FaRoute className="hidden sm:block absolute left-12 sm:left-32 bottom-1/3 text-purple-500 text-xl md:text-2xl animate-float-5" />
      
      <FaSuitcase className="absolute left-6 sm:left-20 bottom-20 sm:bottom-24 text-amber-500 text-xl md:text-2xl animate-float-6" />
      <FaUmbrellaBeach className="absolute right-8 sm:right-32 bottom-16 sm:bottom-20 text-teal-500 text-xl md:text-2xl animate-float-7" />
      <FaCamera className="hidden sm:block absolute left-1/3 bottom-28 text-pink-500 text-xl md:text-2xl animate-float-8" />
      
      {/* Additional scattered icons - Only show on larger screens */}
      <FaPassport className="hidden sm:block absolute right-1/4 top-1/4 text-red-500 text-lg md:text-xl animate-float-1" />
      <FaMountain className="hidden md:block absolute right-40 bottom-32 text-emerald-500 text-2xl md:text-3xl animate-float-3" />
      <FaShip className="hidden sm:block absolute left-24 sm:left-48 bottom-32 sm:bottom-40 text-cyan-500 text-xl md:text-2xl animate-float-4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          {/* Left column - Text content */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:mb-0 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              People don't take trips, trips take people
            </h1>
            
            <p className="mt-4 text-base text-black font-semibold max-w-md">
              To get the best of your adventure you just need to leave and go where you like. We are waiting for you!
            </p>
            
            <div className="mt-6 flex items-center space-x-4 transition-opacity duration-700"
                 style={{ opacity: imageLoaded ? 1 : 0 }}>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium flex items-center transition-colors duration-300 shadow-md hover:shadow-lg">
                Plan a Trip
                <svg 
                  className="ml-2 w-3 h-3" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
              <div className="flex items-center group">
                <div className="bg-yellow-400 rounded-full p-2 w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-yellow-500 transition-colors duration-300 shadow-md group-hover:shadow-lg">
                  <Play size={16} fill="white" color="white" />
                </div>
                <span className="ml-2 text-sm font-medium group-hover:text-orange-500 transition-colors">
                  Watch Our<br />Story
                </span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              {/* Loading placeholder */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transition-opacity duration-500 ${imageLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              >
                <div className="animate-pulse w-full h-full rounded-lg"></div>
              </div>
              
              {/* Main image */}
              <img 
                src={mainImg}
                alt="Traveler with phone and camera" 
                className={`w-full h-auto rounded-lg object-cover transition-all duration-500 ease-in-out transform ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} shadow-xl`}
                onLoad={() => setImageLoaded(true)}
                loading="lazy"
              />
            </div>
            
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4 bg-white rounded-lg shadow-xl p-5 w-35 h-45 z-10 border border-gray-100">
              <div className="flex flex-col items-center justify-center h-full">
                <LiveSupportBadge/>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`mt-12 md:mt-16 transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center justify-center text-center">
            {/* Avatar group */}
            <div className="mb-3 relative">
              <AvatarGroup total={6} className="relative z-10">
                <Avatar alt="Remy Sharp" src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" />
                <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" />
                <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" />
              </AvatarGroup>
            </div>
            
            <div className="mt-2">
              <span className="font-medium text-gray-900 text-lg">
                Traveled more than 2000 places
                <span className="inline-block align-middle ml-1.5">
                  <FaUmbrellaBeach className="text-xl text-teal-500 inline"/>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes float-alt {
          0%, 100% { transform: translateY(-5px) rotate(-5deg); }
          50% { transform: translateY(5px) rotate(5deg); }
        }
        .animate-float-1 { animation: float 8s ease-in-out infinite; }
        .animate-float-2 { animation: float-alt 7s ease-in-out infinite; }
        .animate-float-3 { animation: float 9s ease-in-out 0.5s infinite; }
        .animate-float-4 { animation: float-alt 6s ease-in-out 0.5s infinite; }
        .animate-float-5 { animation: float 7s ease-in-out 1s infinite; }
        .animate-float-6 { animation: float-alt 6s ease-in-out 1.5s infinite; }
        .animate-float-7 { animation: float 8s ease-in-out 2s infinite; }
        .animate-float-8 { animation: float-alt 7s ease-in-out 1s infinite; }
      `}</style>
    </div>
  );
}