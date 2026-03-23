import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import useMediaQuery from "@/hooks/useMediaQuery"
import Link from "./link"
import type { SectionType } from '@/shared/types';

type Props = {
    selectedSection: SectionType;
    setSelectedSection: (value: SectionType) => void;
}


const Navbar = ({ selectedSection, setSelectedSection }: Props) => {
  const flexBetween = "flex items-center justify-between"
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 bg-blue`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <a className= {`${isAboveMediumScreens ? 'text-3xl' : 'text-2xl'} font-bold whitespace-nowrap`}
              href="/"
              onClick={() => setSelectedSection('home')}>
              <span className="font-cursive block text-2xl -mb-2">
                The marriage of
              </span>
                JESSICA & JAMES
            </a>
            {/* RIGHT SIDE */}
            { isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-1xl`}>
              </div>
              <div className={`${flexBetween} gap-8 text-xl font-bold`}>
                <Link 
                  page="RSVP" 
                  selectedSection={selectedSection} 
                  setSelectedSection={setSelectedSection} 
                />
                <Link 
                  page="SCHEDULE" 
                  selectedSection={selectedSection} 
                  setSelectedSection={setSelectedSection} 
                />
                <Link 
                  page="TRAVEL&STAY" 
                  selectedSection={selectedSection} 
                  setSelectedSection={setSelectedSection} 
                />
                <Link 
                  page="CONTACT" 
                  selectedSection={selectedSection} 
                  setSelectedSection={setSelectedSection} 
                />
              </div>
            </div>
            ) : (
            <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-black" />
              </button>
            )}
          </div>
        </div>
      </div>

            {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-full bg-text-primary">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-text-secondary" />
            </button>
          </div>

          {/* MENU ITEMS */}
        <div onClick={() => setIsMenuToggled(false)} className="flex flex-col gap-10 text-2xl ml-[33%]">
          <Link page="home" selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
          <Link page="rsvp" selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
          <Link page="schedule" selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
          <Link page="travel&stay" selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
          <Link page="contact" selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
        </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar