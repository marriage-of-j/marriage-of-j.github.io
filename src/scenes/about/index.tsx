import Navbar from "@/scenes/navbar";
import ClickableText from '@/scenes/about/ClickableText';
import { motion } from 'framer-motion';
import type { SectionType } from '@/shared/types';
import { useSectionObserver } from '@/hooks/useSectionObserver';
import useMediaQuery from '@/hooks/useMediaQuery';

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


  return (
    <div className="min-h-screen">
       <Navbar 
          selectedSection={selectedSection} 
          setSelectedSection={setSelectedSection} 
        />
      
      {/* First Section - Full Height */}
      <div id="home" className="min-h-screen flex items-center justify-center bg-blue">
        <div className={`${isAboveMediumScreens ? 'max-w-6xl' : 'max-w-2xl'} mx-auto px-6 py-24`}>
          <div className="text-center mb-16">
            <h1 className={`${isAboveMediumScreens ? 'text-9xl' : 'text-7xl'} font-bold text-text-primary mb-1`}>5th June 2027</h1>
          </div>

          <motion.div 
            className={`${isAboveMediumScreens ? 'max-w-6xl' : 'max-w-lg'} mb-8 mx-auto px-6 flex flex-wrap justify-between`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ClickableText 
              text="RSVP" 
              onClick={() => scrollToSection('rsvp')}
              tooltip="répondez s'il vous plaît"
            />
            <ClickableText 
              text="SCHEDULE" 
              onClick={() => scrollToSection('schedule')}
              tooltip="what is happening & when"
            />
            <ClickableText 
              text="TRAVEL&STAY" 
              onClick={() => scrollToSection('travel&stay')}
              tooltip="information on travel and nearby accommodation"
            />
            <ClickableText 
              text="CONTACT" 
              onClick={() => scrollToSection('travel&stay')}
              tooltip="link to jess's email or her number is 07415340240"
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

    </div>
  );
};

export default IntroPage