import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar/NavBar';
import missionbackground from '../images/missionbackground.png';
import mcsdphoto from '../images/mcsd.webp';
import MCSDClients from '../components/MCSDClients';

const Home = () => {
    const backgroundStyle = {
        backgroundImage: `url(${missionbackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '85vh',
        position: 'relative',
        overflow: 'hidden',
    };

    const overlayStyle = {
        position: 'absolute',
        top: '50%',  // Center the overlay vertically
        left: '50%',  // Center the overlay horizontally
        transform: 'translate(-50%, -50%)',  // Adjust the position based on the element's dimensions
        width: '77.5%',
        height: '77.5%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        display: 'flex',
        justifyContent: 'space-between',  // Space between text and image
        alignItems: 'center',
        padding: '40px',
        color: '#333',
        borderRadius: '10px',
    };

    const textContainerStyle = {
        flex: '1',  // Take up remaining space
    };

    const imageContainerStyle = {
        flex: '1',  // Take up remaining space
        marginLeft: '40px',  // Adjust the spacing between text and image
    };

    const textStyle = {
        textAlign: 'center',
        lineHeight: '1.6',
        marginBottom: '10px',
    };

    const paragraphStyle = {
        marginBottom: '16px',
    };

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="mission" id='mission' style={backgroundStyle}>
                <div style={overlayStyle}>
                    <div style={textContainerStyle}>
                        <h2 className="text-4xl font-bold mb-6 custom-text-color text-center">About Marshall Community Service Day</h2>
                        <div className="text-xl text-gray-800" style={textStyle}>
                            <p>
                                MOVE is proud to host USC Marshall's official annual community service day, MCSD.
                            </p>
                            <p>
                                MCSD is a special event designed for students, faculty, and alumni of the Marshall community to come together, network, learn, and give back to the Los Angeles community. The event aims to raise awareness of social issues and engage participants in hands-on volunteering activities.
                            </p>
                        </div>
                    </div>
                    <div style={imageContainerStyle}>
                        <img src={mcsdphoto} alt="MCSD" className="w-full h-full object-cover rounded" />
                    </div>
                </div>
            </div>
            <div>
                <MCSDClients />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Home;
