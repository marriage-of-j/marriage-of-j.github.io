import { useEffect } from "react";
import type { SectionType } from "@/shared/types";

type Props = {
  setSelectedSection: (value: SectionType) => void;
};

export const useSectionObserver = ({ setSelectedSection }: Props) => {
  useEffect(() => {
    const sectionIds: SectionType[] = [
      "home",
      "rsvp",
      "schedule",
      "travel&stay",
    ];

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelectedSection(entry.target.id as SectionType);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [setSelectedSection]);
};
