import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const SideBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div>
      {/* Hamburger Icon */}
      <div onClick={toggleMenuOpen} className="p-2 cursor-pointer">
        <GiHamburgerMenu size={25} />
      </div>

      {/* Backdrop when Sidebar is Open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-50 z-10"
          onClick={toggleMenuOpen}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-12 left-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-20 ${menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="p-4 space-y-4">
          <p className="text-lg font-semibold">Content</p>
          <p className="text-lg font-semibold">Analytics</p>
          <p className="text-lg font-semibold">Income</p>
          <p className="text-lg font-semibold">Features</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
