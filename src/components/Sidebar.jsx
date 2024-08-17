import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import sunIcon from '../assets/sun-sm.svg';
import popIcon from '../assets/population-sm.svg';

const Sidebar = () => {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);

  const getSelectedStyle = (path) => {
    return selected === path ? 'text-[rgba(0,0,0,0.87)] bg-navLightBlue border-r-4 border-themeBlue' : 'text-[rgba(0,0,0,0.4)]';
  };

  return (
    <aside className="w-60 h-full flex-shrink-0 border-r border-gray-100 bg-white">
      <nav className="mt-[42px] flex justify-center align-center">
        <ul className="w-full">
          <Link className={"flex cursor-pointer px-8 py-4 text-[16px] font-normal leading-normal " + getSelectedStyle('/')}
            to="/" onClick={() => setSelected("/")}
          >
            <img src={sunIcon} alt="sun-icon" className={"w-4 h-4 mr-3 " + (selected === '/' ? '' : 'opacity-40')} />
            <span>Today's Weather</span>
          </Link>
          <Link className={"flex cursor-pointer px-8 py-4 text-[16px] font-normal leading-normal " + getSelectedStyle('/population')}
            to="/population" onClick={() => setSelected("/population")}
          >
            <img src={popIcon} alt="pop-icon" className={"w-4 h-4 mr-3 " + (selected === '/population' ? '' : 'opacity-40')} />
            <span className="" >Population</span>
          </Link>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
