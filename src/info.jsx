import React from 'react';
import { WiStrongWind, WiSnow, WiThermometer } from 'react-icons/wi';
import { MdFlight, MdArrowDownward } from 'react-icons/md';
import { BsGooglePlay } from 'react-icons/bs';
import { FaApple, FaTemperatureLow } from 'react-icons/fa';
import { GiWindsock } from 'react-icons/gi';

export default function Information () {
  return (
    <div className="bg-gray-50 flex flex-col">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto w-full px-4 py-8 flex flex-col md:flex-row gap-8 relative">
        {/* Left Section - Weather Card */}
        <div className="w-full md:w-1/2 relative">
          <div className="bg-white rounded-3xl shadow-md p-6 relative overflow-hidden">
            
            {/* Temperature Display */}
            <div className="ml-6 mt-8 mb-12">
              <h1 className="text-6xl font-bold text-gray-800">-12°C</h1>
            </div>
            
            {/* Weather Info */}
            <div className="bg-gray-50 p-4 rounded-xl mt-2 mb-6">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <div className="text-orange-500 mr-2">
                    <GiWindsock className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700">Wind</span>
                </div>
                <span className="font-medium">13 km</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="text-orange-500 mr-2">
                    <WiSnow className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700">Snow</span>
                </div>
                <span className="font-medium">80 cm</span>
              </div>
            </div>
            
            {/* Destinations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Morocco Destination */}
              <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-2">
                  <div className="h-40 bg-orange-200 rounded-xl flex items-center justify-center">
                    <img src="https://images.pexels.com/photos/998653/pexels-photo-998653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Morocco Desert" className="w-full h-full object-cover" />
                  </div>
                </div>
                <h3 className="font-bold text-lg">Morocco</h3>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <span>YVR</span>
                  <MdFlight className="w-4 h-4 mx-1 text-gray-500" />
                  <span>LAX</span>
                  <MdFlight className="w-4 h-4 mx-1 text-gray-500" />
                  <span>DXB</span>
                </div>
              </div>
              
              {/* Denver Destination */}
              <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-2">
                  <div className="h-40 bg-red-100 rounded-xl flex items-center justify-center">
                    <img src="https://images.pexels.com/photos/2397647/pexels-photo-2397647.jpeg" alt="Denver Road" className="w-full h-full object-cover" />
                  </div>
                </div>
                <h3 className="font-bold text-lg">Denver</h3>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <span>YVR</span>
                  <MdFlight className="w-4 h-4 mx-1 text-gray-500" />
                  <span>LAX</span>
                </div>
              </div>
            </div>
            
            {/* Weather Stats Circle */}
            <div className="absolute top-8 right-8 bg-white p-4 rounded-xl shadow-md w-48">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="flex justify-center text-orange-500 mb-1">
                    <WiThermometer className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-medium">-12 C°</div>
                  <div className="text-xs text-gray-500">Temp</div>
                </div>
                <div>
                  <div className="flex justify-center text-orange-500 mb-1">
                    <WiStrongWind className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-medium">13 km</div>
                  <div className="text-xs text-gray-500">Wind</div>
                </div>
                <div>
                  <div className="flex justify-center text-orange-500 mb-1">
                    <WiSnow className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-medium">80 cm</div>
                  <div className="text-xs text-gray-500">Snow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Section - Text and Download */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="text-gray-600 font-medium mb-2">GET CONNECTED</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            It is better to travel well than to arrive 
            <span className="ml-2 inline-block text-orange-500">
              <MdArrowDownward className="w-8 h-8" />
            </span>
          </h1>
          
          <div className="mb-10">
            <p className="text-lg text-gray-800 mb-2">Your ultimate travel companion.</p>
            <p className="text-gray-600">Carries all the information you need while travelling.</p>
          </div>
          
          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
  {/* Google Play Button with Thin Rainbow Border */}
  <a href="#" className="relative p-[3px] rounded-xl bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 hover:shadow-lg transition-all">
    <div className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-white">
      <BsGooglePlay className="w-6 h-6 text-blue-500" />
      <div>
        <div className="text-xs text-gray-500">Get it from</div>
        <div className="font-medium">Google Play</div>
      </div>
    </div>
  </a>

  {/* Apple Store Button with Thin Black-Ash Border */}
  <a href="#" className="relative p-[3px] rounded-xl bg-gradient-to-r from-gray-600 to-gray-800 hover:shadow-lg transition-all">
    <div className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-white">
      <FaApple className="w-6 h-6 text-gray-800" />
      <div>
        <div className="text-xs text-gray-500">Download on the</div>
        <div className="font-medium">Apple Store</div>
      </div>
    </div>
  </a>
</div>
        </div>
      </div>
    </div>
  );
}