import React from 'react';
import { Video, Badge } from 'lucide-react';

export default function LiveSupportBadge() {
  return (
    <div className="flex flex-col items-center w-full max-w-xs mx-auto">
      {/* Badge Container */}
      <div className="relative flex items-center justify-center mb-2">
        {/* Badge icon filled with blue */}
        <div className="relative">
          <Badge 
            className="text-blue-500 w-16 h-16 sm:w-20 sm:h-20" 
            strokeWidth={1} 
            fill="#2563eb" 
            stroke="#2563eb"
          />
          
          {/* Video icon in the center (white) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Video className="text-white w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>
        
        {/* Live label */}
        <div className="absolute -bottom-1 bg-blue-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold">
          LIVE
        </div>
      </div>
      
      {/* Text below the badge */}
      <div className="text-center mt-1">
        <div className="text-lg sm:text-xl font-bold text-gray-800">24/7</div>
        <div className="text-xs sm:text-sm text-gray-600">Guide Support</div>
      </div>
    </div>
  );
}