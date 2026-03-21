import { useState, useEffect } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import Petals from '@/components/petals';

type LandingPageProps = {
  onEnter: () => void;
}

const LandingPage = ({ onEnter }: LandingPageProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "We are getting married!";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");  

  useEffect(() => {
    const startDelay = setTimeout(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50); // typing speed in milliseconds
      
      return () => clearInterval(typingInterval);
    }, 50); // time before typing starts

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <Petals />
      {/* Text that writes across */}
      {displayedText && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          <span className={`${isAboveMediumScreens ? 'text-7xl' : 'text-5xl'} md:text-9xl text-black font-cursive transform whitespace-nowrap mb-20`}>
            {displayedText}
          </span>
        </div>
      )}

      <div className="text-center">        
        {/* Clickable centre image */}
        <div 
          onClick={onEnter}
          className="cursor-pointer group mb-8"
        >
        <h1 className={`${isAboveMediumScreens ? 'text-9xl' : 'text-7xl'} font-bold text-text-primary mt-20`}>
            JESSICA & JAMES
        </h1>
        </div>
        
        {/* Below centre image text */}

      </div>
    </div>
  );
};

export default LandingPage