import React from 'react';
import plane from './assets/plane.png';
import luggage from './assets/luggage.png';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

export default function TicketBanner() {
  return (
    <div className="relative mx-2.5 md:mx-4 lg:mx-6 w-[calc(100%-1.25rem)] md:w-[calc(100%-2rem)] lg:w-[calc(100%-3rem)] h-48 sm:h-56 md:h-64 bg-blue-900 rounded-lg overflow-hidden">
      
    {/* Background with travel-themed image */}
    <div className="absolute inset-0 opacity-20">
      <img 
        src="https://images.pexels.com/photos/346696/pexels-photo-346696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        alt="Travel background" 
        className="w-full h-full object-cover" 
      />
    </div>

      {/* Left side content - aligned left */}
      <div className="absolute left-8 sm:left-12 md:left-16 lg:left-20 top-0 bottom-0 flex flex-col justify-center z-10">
        <div className="mb-2 sm:mb-3 md:mb-4">
          <button className="bg-cyan-300 text-indigo-900 font-medium px-3 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-cyan-200 transition-colors text-sm sm:text-base">
            Get Tickets <AirplanemodeActiveIcon className="!w-4 !h-4 sm:!w-5 sm:!h-5"/>
          </button>
        </div>
        <div className="text-white">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Find the</div>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl flex items-center">
            <span className="mr-2">best</span>
            <span className="font-bold">deals</span>
          </div>
        </div>
      </div>
      
      {/* Center airplane - allowed to flow outside container */}
      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/4 rotate-12 z-20 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] overflow-visible">
        <img 
          src={plane} 
          alt="Airplane" 
          className="w-full max-w-none" 
          style={{ maxWidth: 'none' }} 
        />
      </div>
      
      {/* Right side content */}
      <div className="absolute right-4 sm:right-6 top-12 sm:top-16 md:top-20 text-white text-xs sm:text-sm z-10">
        <p>Sponsored by -</p>
        <div className="relative inline-block mt-0.5 sm:mt-1">
          <span className="absolute inset-0 bg-white transform -skew-x-12"></span>
          <span className="relative z-10 px-1 sm:px-2 text-indigo-900 font-bold text-xs sm:text-sm">HAWKS</span>
        </div>
      </div>
      
      {/* Luggage container with overflow hidden */}
      <div className="absolute right-0 bottom-0 w-24 sm:w-28 md:w-32 lg:w-36 h-24 sm:h-28 md:h-32 overflow-hidden z-10">
        <div className="absolute right-4 sm:right-6 md:right-8 bottom-0">
          <img 
            src={luggage} 
            alt="Luggage" 
            className="w-20 sm:w-24 md:w-28 lg:w-32 translate-y-1/3" 
          />
        </div>
      </div>
    </div>
  );
}