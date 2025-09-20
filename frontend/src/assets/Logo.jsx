import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-1.5">
      {/* Icon: Two stylized 'C's intertwined to represent connection */}
      <svg
        className="w-8 h-8 md:w-10 md:h-10 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21.6A9.6 9.6 0 0 1 2.4 12 9.6 9.6 0 0 1 12 2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M12 2.4A9.6 9.6 0 0 0 21.6 12 9.6 9.6 0 0 0 12 21.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
      {/* Text: Split into two colors for branding */}
      <span className="text-xl  md:text-2xl font-extrabold text-white">
        <span className="mr-px">Club</span>
        <span className="text-brand-accent">Connect</span>
      </span>
    </div>
  );
};

export default Logo;
