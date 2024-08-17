import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import sunIcon from '../assets/sun-sm.svg';
import popIcon from '../assets/population-sm.svg';

const Sidebar = () => {
  const [selected, setSelected] = useState("/");

  const getSelectedStyle = (path) => {
    return selected === path ? 'text-[rgba(0,0,0,0.87)] bg-customBlue border-r-4 border-[#16538E]' : 'text-[rgba(0,0,0,0.4)]';
  };

  return (
    <aside className="w-60 h-full flex-shrink-0 border-r border-gray-100 bg-white">
      <nav className="mt-[42px] flex justify-center align-center">
        <ul className="w-full">
          <li className={"flex cursor-pointer px-8 py-4 text-[16px] font-normal leading-normal " + getSelectedStyle('/')}
            onClick={() => setSelected("/")}
          >
            <img src={sunIcon} alt="sun-icon" className={"w-4 h-4 mr-3 " + (selected === '/' ? '' : 'opacity-40')} />
            <Link to="/" className="" >Today's Weather</Link>
          </li>
          <li className={"flex cursor-pointer px-8 py-4 text-[16px] font-normal leading-normal " + getSelectedStyle('/population')}
            onClick={() => setSelected("/population")}
          >
            <img src={popIcon} alt="pop-icon" className={"w-4 h-4 mr-3 " + (selected === '/population' ? '' : 'opacity-40')} />
            <Link to="/population" className="" >Population</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
