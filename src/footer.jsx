import React from 'react';
import { Mail, Phone , Sparkle} from 'lucide-react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white p-8">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-indigo-800 pb-8">
        {/* Left side - Tagline */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Leading the way<br />in adventure</h2>
        </div>
        
        {/* Center - Social Icons */}
        <div className="flex space-x-4 mb-6 md:mb-0">      
            <SportsBasketballIcon/>    
            <YouTubeIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
        </div>
        
        {/* Right - Newsletter with email inline */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="hidden md:block h-20 w-px bg-indigo-800"></div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <h3 className="text-lg font-medium text-center md:text-left">Join our<br />Newsletter</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your e-mail" 
                className="p-2 px-4 rounded-l-md bg-indigo-800 text-white border-none outline-none"
              />
              <button className="bg-orange-500 text-white p-2 px-4 rounded-r-md">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="pt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div>
          <div className="flex items-center mb-4">
          <span><Sparkle size={30} className="text-red-500 fill-red-500" /></span>
            <h2 className="text-2xl font-bold">Kanra</h2>
          </div>
          <img src='https://images.unsplash.com/photo-1722082839841-45473f5a15cf?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='location' className='rounded-x1 p-3 w-45 h-25 relative overflow-hidden'/>        
        </div>
        
        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <div className="flex items-center mb-3">
            <Mail size={18} className="mr-2" />
            <span>getemail@kanra.com</span>
          </div>
          <div className="flex items-center">
            <Phone size={18} className="mr-2" />
            <span>(270) 555-0117</span>
          </div>
        </div>
        
        {/* Company */}
        <div>
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>Career</li>
            <li>Developers</li>
            <li>Our Story</li>
          </ul>
        </div>
        
        {/* Resources & Kanra columns */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kanra</h3>
            <ul className="space-y-2">
              <li>Why Kanra</li>
              <li>Customer</li>
              <li>Press Info</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>Career</li>
              <li>About Us</li>
              <li>Features</li>
            </ul>
          </div>
        </div>
      </div>
      
      <hr className="border-indigo-800 border-t my-8" />

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">&copy; 2023 Rylic Studio | All Rights Reserved</p>
        <div className="flex space-x-4">
          <div className="text-white font-bold">stripe</div>
          <div className="text-white font-bold">PayPal</div>
          <div className="text-white font-bold">WOO</div>
        </div>
      </div>
    </footer>
  );
}