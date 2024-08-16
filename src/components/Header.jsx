import React from 'react';
import headerIcon from '../assets/header-icon.svg';
import userIcon from '../assets/user-icon.svg';
import arrowIcon from '../assets/arrow.svg';

const Header = () => {
  return (
    <header className="w-full h-16 flex-shrink-0 bg-white shadow-md flex items-center relative">
      <div className="ml-8 flex items-center">
        <img className="h-6 w-6 mr-3" src={headerIcon} alt="header-icon" />
        <span className="text-black font-sans text-2xl font-normal leading-normal">
          Analysis
        </span>
        <span className="text-black/60 font-sans text-base font-normal leading-normal">
          .dev
        </span>
      </div>
      <div className="flex items-center absolute right-8 cursor-pointer">
        <img className="h-6 w-6 mr-4" src={userIcon} alt="user-icon" />
        <span>username</span>
        <img className="h-4 w-4 ml-2" src={arrowIcon} alt="arrow-icon" />
      </div>
    </header>
  );
};

export default Header;