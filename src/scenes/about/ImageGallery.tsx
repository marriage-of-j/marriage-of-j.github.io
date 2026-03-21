// components/ImageGallery.tsx
import useMediaQuery from '@/hooks/useMediaQuery';
import { useState } from 'react';

type GalleryItem = {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  link?: string;
};

type ImageGalleryProps = {
  items: GalleryItem[];
};

const ImageGallery = ({ items }: ImageGalleryProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className={`grid ${isAboveMediumScreens ? 'grid-cols-3' : 'grid-cols-1'} gap-6 w-full`}>
      {items.map((item) => (
        <a
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-square overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Image */}
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-t from-white/80 to-transparent transition-opacity ${
            hoveredId === item.id ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              {item.description && (
                <p className="text-sm">{item.description}</p>
              )}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ImageGallery;