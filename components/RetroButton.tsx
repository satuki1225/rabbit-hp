import React from 'react';

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isActive?: boolean;
}

const RetroButton: React.FC<RetroButtonProps> = ({ children, isActive, className, ...props }) => {
  return (
    <button
      className={`
        px-4 py-1 font-sans text-sm md:text-base cursor-pointer select-none active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white active:bg-gray-300
        ${isActive 
          ? 'retro-border-inset bg-gray-200 font-bold' 
          : 'retro-border-outset bg-gray-200 active:translate-y-[1px] active:translate-x-[1px]'
        }
        ${className || ''}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default RetroButton;