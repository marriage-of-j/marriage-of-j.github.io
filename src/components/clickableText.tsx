import { useState } from "react";
import { motion } from 'framer-motion';

type ClickableTextProps = {
  text: string;
  href?: string;
  onClick?: () => void;
  tooltip?: string;
  isAboveMediumScreens?: boolean;
  className?: string;
}

const ClickableText = ({ text, href, onClick, tooltip, className, isAboveMediumScreens }: ClickableTextProps) => {
  const clickButtonText = `${isAboveMediumScreens ? 'text-3xl' : 'text-2xl'} text-text-primary font-bold transition-all duration-300 hover:scale-90 inline-block cursor-pointer hover:opacity-100`;
  const [showTooltip, setShowTooltip] = useState(false);
  const bubbleColour = text.toLowerCase() === 'rsvp' ? 'bg-green' :
                   text.toLowerCase() === 'schedule' ? 'bg-plum' :
                   text.toLowerCase() === 'travel&stay' ? 'bg-pink' : 'bg-yellow';

  const content = (
  <div
    className={`relative inline-block ${className || ''}`}
    onMouseEnter={() => setShowTooltip(true)}
    onMouseLeave={() => setShowTooltip(false)}
  >
      {/* Tooltip Bubble with Framer Motion */}
      {tooltip && showTooltip && isAboveMediumScreens && (
        <motion.div
          style={{
            width: 240,
            height: 240,
            borderRadius: "50%",
          // background:
          //   "radial-gradient(circle at 30% 30%, #ffb347, #ff6a00)",
        }}
        animate={{
          y: [0, -60, 0],
          x: ["-50%", "-50%", "-50%"],
          scaleY: [1.05, 0.99, 1.05],
          scaleX: [1, 1.01, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
          className={`absolute bottom-full left-1/2 mb-4 ${bubbleColour} text-text-primary text-sm rounded-full shadow-2xl flex items-center justify-center p-8 z-50`}
        >
          <p className="text-center text-base leading-relaxed font-semibold">
            {tooltip}
          </p>
        </motion.div>
      )}
      
      {/* Text */}
      <span className={clickButtonText}>
        {text}
      </span>
    </div>
  );

  if (href) {
    return (
      <a 
        href={href}
        className={clickButtonText}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={clickButtonText}
    >
      {content}
    </button>
  );
};

export default ClickableText;