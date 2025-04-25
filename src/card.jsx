import { useRef } from 'react';
import { Icon } from '@iconify/react';
import { TbBus } from "react-icons/tb";

export default function Card() {
  const scrollRef = useRef(null);

  const cards = [
    { id: 1, title: "Venice", color: "bg-blue-100" , image:'https://images.pexels.com/photos/2763964/pexels-photo-2763964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 2, title: "Bali", color: "bg-green-100" , image:'https://images.pexels.com/photos/1802183/pexels-photo-1802183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 3, title: "Moab", color: "bg-red-100" , image:'https://images.pexels.com/photos/62600/pexels-photo-62600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    { id: 4, title: "Arizona", color: "bg-yellow-100", image:'https://images.pexels.com/photos/414136/pexels-photo-414136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 5, title: "Paris", color: "bg-purple-100" , image:'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 6, title: "Tokyo", color: "bg-pink-100", image:'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 7, title: "China", color: "bg-pink-100", image:'https://images.pexels.com/photos/3204950/pexels-photo-3204950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Discover the touch of nature <span className="inline-block align-middle ml-1"><Icon icon="fluent-emoji:rainbow"/> </span></h1>
      
      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 px-4 py-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 snap-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 transition-all duration-300 hover:scale-110 hover:z-10"
            >
              <div className={`${card.color} rounded-lg shadow-lg overflow-hidden h-64`}>
                <div className="relative h-full">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <div className="inline-block px-3 py-1 bg-white text-sm font-semibold text-black rounded-full">
                      {card.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => scroll('left')} 
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 rounded-full p-3 shadow-md hover:bg-white z-20"
        >
          <div className="w-6 h-6 flex items-center justify-center">←</div>
        </button>
        
        <button 
          onClick={() => scroll('right')} 
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 rounded-full p-3 shadow-md hover:bg-white z-20"
        >
          <div className="w-6 h-6 flex items-center justify-center">→</div>
        </button>
      </div>
    </div>
    <div className="relative">
  <hr className="border-gray-200 border-t my-8" />
  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white pl-2">
    <TbBus className="text-gray-400 text-5xl" />
  </div>
</div>
    </>
  
  );
}