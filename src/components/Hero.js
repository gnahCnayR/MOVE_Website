import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import herobackground from '../images/movehear.png';

const Hero = () => {
    const backgroundStyle = {
        backgroundImage: `url(${herobackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
    };

    const contentStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center', // Adjust text alignment as needed
    };

    return (
        <>
            <div className="hero" id='hero' style={backgroundStyle}>
                <div>
                    <NavBar />
                </div>

                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in" style={contentStyle}>

                    <div className="flex flex-col lg:flex-row py-8 justify-between mt-60">
                        <div className="flex flex-col justify-end px-8 " data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-2 md:text-6xl text-4xl font-bold text-white">
                                Welcome to MOVE
                            </h1>
                            <div className="text-2xl font-semibold tracking-tight mb-2 mt-4 text-white">where business meets social entrepreneurship</div>
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-2">
                                <Link to="/mission" className="text-white custom-bg-color hover:bg-green-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    Learn more
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>
                        {/* <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            {/* USC MOVE Video */}
                            {/* Can be replaced with image */}
                            {/* <iframe src="https://player.vimeo.com/video/439019605?h=6954bce4a5" className="rounded-t float-right duration-1000 w-full lg:w-2/3  lg:ml-6" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
