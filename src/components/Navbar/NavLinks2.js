import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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

const InitiativesSublinks = ({ isOpen }) => {
    return (
        <div className={`absolute z-10 ${isOpen ? 'block' : 'hidden'} bg-white mt-2 py-2 rounded-lg shadow-md`}>
            <HashLink className="block px-4 py-2 font-extrabold custom-text-color hover:text-green-900" smooth to="/leads">
                Leads
            </HashLink>
        </div>
    );
};

const NavLinks = () => {
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

    const toggleAboutDropdown = () => {
        setAboutDropdownOpen(!aboutDropdownOpen);
    };

    return (
        <div className="flex items-center">
            <div className="relative group">
                <HashLink className={`px-4 font-extrabold custom-text-color hover:text-green-900`} smooth to="/" onClick={toggleAboutDropdown}>
                    About
                </HashLink>
                <InitiativesSublinks isOpen={aboutDropdownOpen} />
            </div>
            <HashLink className={`px-4 font-extrabold custom-text-color hover:text-green-900`} smooth to="/initiatives">
                Initiatives
            </HashLink>
            <AboutSublinks isOpen={aboutDropdownOpen} />
            <HashLink className={`px-4 font-extrabold custom-text-color hover:text-green-900`} to="/events">
                Events
            </HashLink>
            {/* <HashLink className={`px-4 font-extrabold custom-text-color hover:text-green-900`} to="/contact">
                Resources
            </HashLink> */}
            {/* <Link className={`text-white custom-bg-color inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl`} smooth to="/join-us">
                Join Us
            </Link> */}
            <a
                className={`text-white custom-bg-color inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl`}
                href="https://forms.gle/RoMDQkcikEvVHKxn9"  // Replace with your actual external link
                target="_blank"  // Open the link in a new tab/window
                rel="noopener noreferrer"
            >
                Join Us
            </a>

        </div>
    );
};

export default NavLinks;
