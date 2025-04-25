import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { FaAmazon, FaAirbnb, FaFedex } from "react-icons/fa";
import { BiLogoTripAdvisor } from "react-icons/bi";
import { SiExpedia, SiOyo } from "react-icons/si";
import {Avatar, Stack} from '@mui/material';
import { CiCloudOn } from "react-icons/ci";


export default function Testimonials() {
  // Sample data for the testimonial section
  const testimonial = {
    destinations: [
      { name: "Nowhere", image: "https://images.pexels.com/photos/25852878/pexels-photo-25852878/free-photo-of-wing-of-an-aircraft.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      { name: "Canada", image: "https://images.pexels.com/photos/189848/pexels-photo-189848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      { name: "Algeria", image: "https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
    ],

    partners: [
      { name: "Amazon", logo: <FaAmazon size={24} className="sm:text-2xl md:text-3xl" /> },
      { name: "OYO", logo: <SiOyo size={24} className="sm:text-2xl md:text-3xl" /> },
      { name: "Airbnb", logo: <FaAirbnb size={24} className="sm:text-2xl md:text-3xl" /> },
      { name: "TripAdvisor", logo: <BiLogoTripAdvisor size={24} className="sm:text-2xl md:text-3xl" /> },
      { name: "Expedia", logo: <SiExpedia size={24} className="sm:text-2xl md:text-3xl" /> },
      { name: "FedEx", logo: <FaFedex size={24} className="sm:text-2xl md:text-3xl" /> }
    ]
  };

  const marqueeRef = useRef(null);
  const animationRef = useRef(null);
  const SCROLL_SPEED = 0.5; // Pixels per frame

  useEffect(() => {
    let position = 0;
    const marqueeContainer = marqueeRef.current;
    
    if (!marqueeContainer) return;
    
    // Duplicate the content to create a seamless loop
    const content = marqueeContainer.querySelector('.marquee-content');
    const clonedContent = content.cloneNode(true);
    marqueeContainer.appendChild(clonedContent);
    
    // Animation function
    const animate = () => {
      const containerWidth = content.offsetWidth;
      
      position -= SCROLL_SPEED;
      
      // Reset position when first set of logos is fully scrolled
      if (position <= -containerWidth) {
        position = 0;
      }
      
      marqueeContainer.style.transform = `translateX(${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-gray-50 py-4 sm:py-6 md:py-10 px-3 sm:px-4 md:px-8 lg:px-12 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Destinations and Testimonial Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-12 mb-8 md:mb-12">
          {/* Destinations with responsive layout */}
          <div className="w-full md:w-2/5">
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 p-2 sm:p-4">
              {/* Large circle - main destination */}
              <div className="absolute left-2 sm:left-4 md:left-8 lg:left-16 top-0 sm:top-2 md:top-4 lg:top-8 w-32 sm:w-40 md:w-48 lg:w-64 h-32 sm:h-40 md:h-48 lg:h-64 rounded-full overflow-hidden shadow-lg">
                <img 
                  src={testimonial.destinations[0].image} 
                  alt={testimonial.destinations[0].name} 
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-4 sm:left-8 lg:left-15 bg-white rounded-full px-1 sm:px-2 py-0.5 sm:py-1 text-xs font-semibold text-red-500">
                  <span className="flex items-center">
                    <span className="mr-1 text-red-500">●</span>
                    {testimonial.destinations[0].name}
                  </span>

                </div>
              </div>
              <CiCloudOn size={50}/>

              {/* Medium circle - second destination */}
              <div className="absolute left-36 sm:left-44 md:left-60 lg:left-80 top-8 sm:top-12 md:top-24 lg:top-45 w-24 sm:w-28 md:w-36 lg:w-44 h-24 sm:h-28 md:h-36 lg:h-44 rounded-full overflow-hidden shadow-lg">
                <img 
                  src={testimonial.destinations[1].image} 
                  alt={testimonial.destinations[1].name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-4 sm:left-6 md:left-8 bg-white rounded-full px-1 sm:px-2 py-0.5 sm:py-1 text-xs font-semibold text-red-500">
                  <span className="flex items-center">
                    <span className="mr-1 text-red-500">●</span>
                    {testimonial.destinations[1].name}
                  </span>
                </div>
              </div>

              {/* Small circle - third destination */}
              <div className="absolute left-12 sm:left-16 md:left-24 lg:left-50 bottom-0 md:bottom-0 lg:-bottom-4 w-16 sm:w-20 md:w-24 lg:w-28 h-16 sm:h-20 md:h-24 lg:h-28 rounded-full overflow-hidden shadow-lg">
                <img 
                  src={testimonial.destinations[2].image} 
                  alt={testimonial.destinations[2].name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 bg-white rounded-full px-1 sm:px-2 py-0.5 sm:py-1 text-xs font-semibold text-red-500">
                  <span className="flex items-center">
                    <span className="mr-1 text-red-500">●</span>
                    {testimonial.destinations[2].name}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial with responsive text */}
          <div className="w-full md:w-3/5">
            <div className="relative">
            <CiCloudOn size={50}/>

              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-navy-900 mb-4 sm:mb-6">Their service is absolutely wonderful and cheaper than the hotel direct or any other booking site. You got back to us strait away and no issues at all in the other end.</h1>

              {/* Avatars with responsive spacing */}
              <div className="flex items-center">
                <Stack direction="row" spacing={1} className="sm:ml-0">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className="w-8 h-8 sm:w-10 sm:h-10" />
                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className="w-8 h-8 sm:w-10 sm:h-10" />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" className="w-8 h-8 sm:w-10 sm:h-10" />
                  <Avatar alt="John Doe" src="/static/images/avatar/3.jpg" className="w-8 h-8 sm:w-10 sm:h-10 hidden xs:block" />
                  <Avatar alt="Smith James" src="/static/images/avatar/3.jpg" className="w-8 h-8 sm:w-10 sm:h-10 hidden sm:block" />
                  <Avatar alt="Andy Backer" src="/static/images/avatar/3.jpg" className="w-8 h-8 sm:w-10 sm:h-10 hidden md:block" />
                </Stack>
                
                <button className="ml-2 sm:ml-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-md">
                  <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partners Section - Continuous Scrolling with responsive spacing */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 md:pt-8 border-t border-gray-200">
          <div className="relative w-full overflow-hidden">
            <div 
              ref={marqueeRef}
              className="flex items-center"
            >
              <div className="marquee-content flex items-center gap-6 sm:gap-10 md:gap-16 opacity-60">
                {testimonial.partners.map((partner, index) => (
                  <div key={index} className="h-6 sm:h-8 md:h-10 flex-shrink-0 text-gray-500 mx-1 sm:mx-2">
                    {partner.logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}