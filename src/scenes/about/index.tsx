import Navbar from "@/scenes/navbar";
import ClickableText from '@/scenes/about/ClickableText';
import { motion } from 'framer-motion';
import type { SectionType } from '@/shared/types';
import { useSectionObserver } from '@/hooks/useSectionObserver';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useEffect, useState } from "react";
// import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

type Props = {
  onBack: () => void;
  selectedSection: SectionType;
  setSelectedSection: (value: SectionType) => void;
}

const IntroPage = ({ selectedSection, setSelectedSection }: Props) => {useSectionObserver({ setSelectedSection });
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isHovered, setIsHovered] = useState(false);
  const [isWiggling, setIsWiggling] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWiggling(true);
      setTimeout(() => setIsWiggling(false), 1500); // matches wiggle duration
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="min-h-screen">
      {/* <CursorHearts /> */}
       <Navbar 
          selectedSection={selectedSection} 
          setSelectedSection={setSelectedSection} 
        />
      
      {/* First Section - Full Height */}
      <div id="home" className="min-h-screen flex items-center justify-center bg-blue">
        <div className={`${isAboveMediumScreens ? 'max-w-6xl' : 'max-w-2xl'} mx-auto px-6 py-24`}>
          <div className="text-center mb-16">
            <h1 className={`${isAboveMediumScreens ? 'text-9xl' : 'text-7xl'} font-sans font-bold text-text-primary mb-1`}>5th June 2027</h1>
          </div>

          <motion.div 
            className={`${isAboveMediumScreens ? 'max-w-6xl flex-row justify-between' : 'max-w-2xl flex-col'} mb-8 mx-auto px-6 flex flex-wrap`}            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
          <div className="relative flex items-center justify-center" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <ClickableText
              text="RSVP"
              onClick={() => scrollToSection('rsvp')}
              tooltip="répondez s'il vous plaît"
              className={isWiggling && !isHovered ? 'animate-wiggle' : ''}
              isAboveMediumScreens={isAboveMediumScreens}
            />
            {/* {isAboveMediumScreens && showHint && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute -bottom-8 left-0 text-sm font-sans italic text-text-primary whitespace-nowrap pointer-events-none z-50"
              >
                Please respond!
              </motion.span>
            )} */}
          </div>
            <ClickableText 
              text="SCHEDULE" 
              onClick={() => scrollToSection('schedule')}
              tooltip="what is happening & when"
              isAboveMediumScreens={isAboveMediumScreens}
            />
            <ClickableText 
              text="TRAVEL&STAY" 
              onClick={() => scrollToSection('travel&stay')}
              tooltip="information on travel and nearby accommodation"
              isAboveMediumScreens={isAboveMediumScreens}
            />
            <ClickableText 
              text="CONTACT" 
              onClick={() => scrollToSection('contact')}
              tooltip="Jessica: +447415340240 James: +447964002282"
              isAboveMediumScreens={isAboveMediumScreens}
            />
          </motion.div>
        </div>
      </div>

  {/* RSVP Section */}
      <div id="rsvp" className="min-h-screen bg-green flex items-center">
        <div className={`${isAboveMediumScreens ? 'max-w-6xl' : 'max-w-2xl'} mx-auto px-6 py-24 w-full`}>
          <h2 className="text-6xl font-bold text-text-primary mb-8">RSVP</h2>
            <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfmIDWTEt7DMi2eAOBTYJ8Amx61cm9Qpsr8gnFgFD3JvFcdbQ/viewform?usp=dialog"
            width="100%"
            height="350"
            >
            Loading…
            </iframe>
        </div>
      </div>

      {/* SCHEDULE Section */}
      <div id="schedule" className="min-h-screen bg-plum flex items-center">
        <div className={`${isAboveMediumScreens ? 'max-w-6xl' : 'max-w-2xl'} mx-auto px-6 py-24 w-full`}>
          <h2 className="text-6xl font-bold text-text-primary mb-8">ON THE DAY</h2>
          <p className="text-2xl text-text-primary">
            ARRIVE 2PM
            <br /><br />
            CEREMONY 3PM
            <br /><br />
            LEAVE MIDNIGHT
            </p>
        </div>
      </div>

      {/* TRAVEL&STAY Section */}
      <div id="travel&stay" className="min-h-screen bg-pink flex items-center">
        <div className={`${isAboveMediumScreens ? 'max-w-6xl' : 'max-w-2xl'} mx-auto px-6 py-24 w-full`}>
          <h2 className="text-6xl font-bold text-text-primary mb-8">TRAVEL & STAY</h2>
          <p className="text-xl text-text-primary">
            INFORMATION ON TRAVEL AND NEARBY ACCOMMODATION. THIS IS JUST A PLACEHOLDER FOR NOW
          <br /><br />
            What 3 words: ///gathers.unleashed.leaps
            </p>
        </div>
      </div>


      {/* CONTACT Section */}
      <div id="contact" className="min-h-screen bg-yellow flex items-center">
        <div className={`${isAboveMediumScreens ? 'max-w-6xl' : 'max-w-2xl'} mx-auto px-6 py-24 w-full`}>
          <h2 className="text-6xl font-bold text-text-primary mb-8">CONTACT</h2>
          <p className="text-2xl text-text-primary">
            JESSICA
            <br />
            +447415340240
            <br />
            <a href="mailto:jess.m.shields@live.co.uk" className=" transition duration-300 hover:text-text-primary">
            jess.m.shields@live.co.uk
            </a>
            <br /><br />
            JAMES
            <br />
            +447964002282
            <br />
            <a href="mailto:jamesgeorgelay@gmail.com" className=" transition duration-300 hover:text-text-primary">
            jamesgeorgelay@gmail.com
            </a>
            
          </p>
        </div>
      </div>
    </div>
  );
};


export default IntroPage