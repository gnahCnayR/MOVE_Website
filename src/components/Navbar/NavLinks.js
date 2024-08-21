import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const InitiativesSublinks = ({ isOpen }) => {
    return (
        <div className={`absolute z-10 ${isOpen ? 'block' : 'hidden'} bg-white mt-2 py-2 rounded-lg shadow-md`}>
            <HashLink className="block px-4 py-2 font-extrabold custom-text-color hover:text-green-900" smooth to="/leads">
                Leads
            </HashLink>
        </div>
    );
};

const AboutSublinks = ({ isOpen }) => {
    return (
        <div className={`absolute z-10 ${isOpen ? 'block' : 'hidden'} bg-white mt-2 py-2 rounded-lg shadow-md`}>
            <HashLink className="block px-4 py-2 font-extrabold custom-text-color hover:text-green-900" smooth to="/mission">
                Mission
            </HashLink>
            <HashLink className="block px-4 py-2 font-extrabold custom-text-color hover:text-green-900" smooth to="/eboard">
                Eboard
            </HashLink>
        </div>
    );
};

const NavLinks = ({ isNavbarHidden, applyStyling }) => {
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [initiativesDropdownOpen, setInitiativesDropdownOpen] = useState(false);

    const openAboutDropdown = () => {
        setAboutDropdownOpen(true);
        // Close other dropdowns if needed
        setInitiativesDropdownOpen(false);
    };

    const openInitiativesDropdown = () => {
        setInitiativesDropdownOpen(true);
        // Close other dropdowns if needed
        setAboutDropdownOpen(false);
    };

    const closeDropdowns = () => {
        setAboutDropdownOpen(false);
        setInitiativesDropdownOpen(false);
    };

    return (
        <div className="flex items-center">
            <div className="relative group">
                <HashLink className={`px-4 font-extrabold ${isNavbarHidden ? 'custom-text-color' : 'text-white'} hover:text-green-900`} smooth to="/" onClick={openAboutDropdown}>
                    About
                </HashLink>
                <AboutSublinks isOpen={aboutDropdownOpen} />
            </div>

            <div className="relative group">
                <HashLink className={`px-4 font-extrabold ${isNavbarHidden ? 'custom-text-color' : 'text-white'} hover:text-green-900`} smooth to="/initiatives" onClick={openInitiativesDropdown}>
                    Initiatives
                </HashLink>
                <InitiativesSublinks isOpen={initiativesDropdownOpen} />
            </div>

            <HashLink className={`px-4 font-extrabold ${isNavbarHidden ? 'custom-text-color' : 'text-white'} hover:text-green-900`} to="/MCSD">
                MCSD
            </HashLink>
            <HashLink className={`px-4 font-extrabold ${isNavbarHidden ? 'custom-text-color' : 'text-white'} hover:text-green-900`} to="/events">
                Events
            </HashLink>
            
            <a
                className={`text-white ${isNavbarHidden ? 'custom-bg-color' : 'hover:custom-text-color'} inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl`}
                href="https://docs.google.com/forms/d/e/1FAIpQLSe5TGmpQB3d8RgPGKCGRCi8BeAHjEYlvUKoyHpeRoXHJr4NGw/viewform?pli=1"  // Replace with your actual external link
                target="_blank"  // Open the link in a new tab/window
                rel="noopener noreferrer"
            >
                Join Us
            </a>
        </div>
    );
};

export default NavLinks;
