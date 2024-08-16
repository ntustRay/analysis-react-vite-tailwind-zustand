import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <nav>
        <ul>
          <li className="mb-2">
            <Link to="/" className="text-white">Today's Weather</Link>
          </li>
          <li className="mb-2">
            <Link to="/population" className="text-white">Population</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
