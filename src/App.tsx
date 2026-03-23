import { useState } from 'react'
import LandingPage from "@/scenes/landing";
import IntroPage from "@/scenes/about";
import type { PageType, SectionType } from './shared/types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('landing');
  const [selectedSection, setSelectedSection] = useState<SectionType>('home');

  return (
    <div className="app bg-blue">
      {currentPage === 'landing' ? (
        <LandingPage onEnter={() => setCurrentPage('intro')} />
      ) : (
        <IntroPage 
          onBack={() => setCurrentPage('landing')}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
      )}
            <footer className="bottom-0 w-full text-center py-2 text-xs text-text-primary bg-yellow">
      Website designed & made by Jessica Shields
      </footer>
    </div>
  );
} 

export default App;
