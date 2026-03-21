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
    </div>
  );
} 

export default App;
