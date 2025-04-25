import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import camera from './assets/camera.png'
import { MessageSquare } from 'lucide-react';

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        
        {/* Explorer Container */}
        <div className="bg-stone-100 rounded-2xl p-6 overflow-visible relative">
          {/* decoration */}
          <div className="absolute top-6 left-6">
            <div className="grid grid-cols-5 gap-1">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-2 h-2 text-stone-300">+</div>
              ))}
            </div>
          </div>
          
          {/* Image container - positioned to overlap */}
          <div className="relative h-35 sm:h-45 md:h-55 lg:h-65 -mt-12 -mx-4 mb-16">
            <img 
              src={camera} 
              alt="Explorer with camera" 
              className="absolute top-1 left-1/2 transform -translate-x-1/2 h-full object-contain z-10" 
            />
          </div>
          
          {/* Text and CTA */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="font-bold text-xl text-stone-900">Explore the world with us 🌎</h2>
              </div>
              <div>
                <button className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg flex items-center">
                  Plan a Trip 
                  <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Blog and Workflow Container */}
        <div className="flex flex-col gap-4">
          {/* Blog Card */}
          <div className="bg-blue-100 rounded-2xl p-6 flex flex-col justify-between min-h-40">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg text-stone-900">Read our blog</h3>
              <ArrowUpRight className="text-stone-700" size={20} />
            </div>
            <p className="mt-3 text-sm text-stone-700">We have share our journey and some story</p>
          </div>
          
          {/* Workflow Card */}
          <div className="bg-green-100 rounded-2xl p-6 flex flex-col justify-between min-h-40">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg text-stone-900">See our workflow</h3>
              <ArrowUpRight className="text-stone-700" size={20} />
            </div>
            <p className="mt-3 text-sm text-stone-700">It's a must to that we would like to share our workflow to believe you</p>
          </div>
        </div>
        
        {/* Chat with Expert Container */}
        <div className="bg-stone-100 rounded-2xl p-6 flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg text-stone-900">Chat With Expert</h3>
            <ArrowUpRight className="text-stone-700" size={20} />
          </div>
          
          {/* Live Badge */}
          <div className="flex justify-center my-4">
            <div className="bg-green-500 rounded-full w-20 h-20 flex flex-col items-center justify-center">
              {/* Chat icon */}
              <MessageSquare className="text-white h-6 w-6" />
              
              {/* LIVE text */}
              <span className="bg-white text-green-500 rounded-full px-2 py-0.5 text-xs font-bold mt-1">LIVE</span>
            </div>
          </div>
          
          {/* Expert Stats */}
          <div className="mt-auto">
            <p className="text-sm">
              <span className="font-bold text-lg">3,000+ </span>
              our Expert team members around the world who create incredible and amazing projects
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}