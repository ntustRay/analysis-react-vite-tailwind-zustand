import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({children}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 py-10 px-[42px]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
