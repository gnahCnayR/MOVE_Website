import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';

const Footer = () => {
    return (
        <footer>
            <div className="footer text-center max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                {/* Top area: Blocks */}
                <div className="grid justify-center sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200">

                    {/* 2nd block */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-4 mx-auto text-center">
                        {/* <h6 className="text-[#013289] text-xl font-bold mb-4 custom-text-color">LINKS</h6>
                        <ul className="text-md custom-pt-color">
                            <li className="mb-2">
                                <HashLink to="#" className="hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                            </li>
                            <li className="mb-2">
                                <HashLink to="#" className="hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Initiatives</HashLink>
                            </li>
                            <li className="mb-2">
                                <HashLink to="#" className="hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contact</HashLink>
                            </li>
                        </ul> */}
                    </div>

                    {/* 3rd block */}
                    {/* <div className="col-span-12 lg:col-span-4 mx-auto text-center">
                        <h6 className="text-[#013289] text-xl font-bold mb-4 custom-text-color">OUR SERVICES</h6>
                        <ul className="text-md custom-pt-color">
                            <li className="mb-2">
                                <Link to="#" className="hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Volunteering</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="#" className="hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Guest Speakers</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="#" className="hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Initiatives</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="#" className="hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Consulting</Link>
                            </li>
                        </ul>
                    </div> */}

                    {/* 4th block */}
                    <div className="col-span-12 lg:col-span-4 text-center mx-auto font-bold uppercase custom-text-color">
                        {/* <div className="text-xl mb-6">
                            Social Media Links
                        </div> */}

                        <div className="text-md font-medium mb-6">
                            Follow us on social media.
                        </div>

                        <div className="mx-auto text-center mt-2">
                            <ul className="flex justify-center mb-4 md:mb-0">
                                <li>
                                    <a href="https://www.instagram.com/move.usc/" target="_blank" rel="noopener noreferrer">
                                        <img src={instagram} alt="Instagram" className='text-blue-900 mb-4' width="50" height="50"/>
                                    </a>
                                </li>
                                <li className="ml-4">
                                    <a href="https://www.linkedin.com/groups/12578274/" target="_blank" rel="noopener noreferrer">
                                        <img src={linkedin} alt="Linkedin" className='text-blue-900 mb-4' width="50" height="50"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                        <div className="text-sm text-green-600 font-semibold py-1">
                            Copyright &copy; {new Date().getFullYear()}{"  "}
                            <HashLink
                                to="#"
                                className=" hover:text-gray-900"
                            >
                                MOVE
                            </HashLink>. All rights reserved.
                        </div>
                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer;
