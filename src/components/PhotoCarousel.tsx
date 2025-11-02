import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import eventPhoto1 from "@/assets/event-photo-1.jpg";
import eventPhoto2 from "@/assets/event-photo-2.jpg";
import eventPhoto3 from "@/assets/event-photo-3.jpg";
import eventPhoto4 from "@/assets/event-photo-4.jpg";

const CAROUSEL_IMAGES = [
  eventPhoto1,
  eventPhoto2,
  eventPhoto3,
  eventPhoto4,
];

export const PhotoCarousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (CAROUSEL_IMAGES.length * 100));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES];

  return (
    <div className="w-full h-[450px] relative overflow-hidden rounded-lg border border-border/50 shadow-[0_2px_6px_rgba(0,0,0,0.08)]">
      {/* Desktop/Tablet - Vertical Scroll */}
      <div className="hidden md:block h-full overflow-hidden">
        <div 
          className="flex flex-col gap-4 transition-transform"
          style={{ 
            transform: `translateY(-${scrollPosition}px)`,
            transition: 'transform 0.05s linear'
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div key={`desktop-${index}`} className="flex-shrink-0">
              <img
                src={image}
                alt={`Event photo ${(index % CAROUSEL_IMAGES.length) + 1}`}
                className="w-full h-[200px] object-cover rounded"
                loading={index < 3 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile - Horizontal Scroll */}
      <div className="md:hidden h-full overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory">
        <div className="flex gap-4 h-full px-4">
          {duplicatedImages.map((image, index) => (
            <div key={`mobile-${index}`} className="flex-shrink-0 snap-center w-[85%] h-full">
              <img
                src={image}
                alt={`Event photo ${(index % CAROUSEL_IMAGES.length) + 1}`}
                className="w-full h-full object-cover rounded"
                loading={index < 2 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
