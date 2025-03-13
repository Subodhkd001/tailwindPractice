import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo.svg";

const Navbar = () => {
    const navItems = ["Home", "About", "Services", "Contact"];
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='py-3 px-10 lg:px-32 xl:px-48 2xl:px-56 flex justify-between items-center shadow-sm relative'>
            <img src={logo} alt="logo" className='w-24' />

            <div>
                {/* Desktop Menu */}
                <div className='hidden md:flex gap-6'>
                    {navItems.map((item) => (
                        <span key={item} className="cursor-pointer">{item}</span>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <div className='md:hidden' onClick={() => setMenuOpen(prev => !prev)}>
                    <GiHamburgerMenu size={25} />
                </div>

                {/* Mobile Dropdown Menu */}
                {menuOpen && (
                    <div className='absolute top-14 right-5 bg-white shadow-md p-3 rounded-md w-40'>
                        {navItems.map((item) => (
                            <span key={item} className="block py-2 cursor-pointer hover:text-blue-500">{item}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
