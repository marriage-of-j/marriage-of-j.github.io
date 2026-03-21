import AnchorLink from "react-anchor-link-smooth-scroll"
import type { SectionType } from '@/shared/types';

type Props = {
    page: string;
    selectedSection: SectionType;
    setSelectedSection: (value: SectionType) => void;
}

const Link = ({ 
    page,
    selectedSection,
    setSelectedSection
} : Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SectionType;
    
    return (
      <AnchorLink 
        className={`${selectedSection === lowerCasePage ? `text-text-primary` : ""} transition duration-300 hover:text-text-primary`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedSection(lowerCasePage)}
      >
        {page}
      </AnchorLink>
    )
}

export default Link