import React from 'react';
import tourist from './assets/tourist.png';
import camera from './assets/camera.png';
import cloud from './assets/cloud.png';
import flight from './assets/flight.png';

export default function Banner() {
  return (
    <div className="relative mx-2.5 md:mx-4 lg:mx-6 w-full max-w-full h-auto min-h-28 sm:min-h-32 md:min-h-40 lg:min-h-48 bg-blue-900 rounded-lg overflow-visible py-3">
    
      {/* Left side camera box */}
      <div className="absolute left-4 sm:left-6 md:left-8 top-1/2 transform -translate-y-1/2 z-20 hidden sm:block">
        <div className="relative bg-sky-300 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-24 lg:w-36 lg:h-28 rounded-lg overflow-visible">
          <div className="absolute -left-3 -top-8 sm:-top-10 md:-top-12 lg:-top-14 w-full transform -translate-y-1/4 overflow-visible">
            <img 
              src={camera}
              alt="Camera" 
              className="w-full h-auto"
            />            
          </div>
          <div className="absolute -left-2 top-4 sm:top-5 md:top-6 w-full transform -translate-y-1/4 overflow-visible">
            <img 
              src={cloud}
              alt="Cloud" 
              className="w-24 sm:w-28 md:w-36 lg:w-48 h-auto"
            />            
          </div>
        </div>
      </div>

      {/* Centered text content */}
      <div className="relative flex flex-col items-center justify-center z-10 px-3 text-center mx-auto w-full max-w-4xl">
        <div className="text-white">
          <div className="text-sm sm:text-base md:text-lg lg:text-xl font-light mb-1 px-2 sm:px-4 md:px-6">
            Your travel companion that carries all the information
          </div>
          <div className="flex justify-center">
            <img 
              src={flight} 
              alt='plane' 
              className="w-14 sm:w-16 md:w-20 lg:w-28"
            />
          </div>
        </div>
      </div>
      
      {/* Right side tourist image */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-16 sm:w-24 md:w-32 lg:w-40 xl:w-56 overflow-hidden">
        <img 
          src={tourist} 
          alt="Tourist" 
          className="w-full h-auto object-contain" 
        />
      </div>
    </div>
  );
}