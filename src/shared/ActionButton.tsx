import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import type { SectionType } from "@/shared/types";

type Props = {
    children: React.ReactNode;
    setSelectedSection: (value: SectionType) => void;
};

const ActionButton = ({ children, setSelectedSection }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedSection("contact")}
      href={`#${"contact"}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;