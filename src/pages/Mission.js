import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar/NavBar';
import missionbackground from '../images/missionbackground.png';

const Home = () => {
    const backgroundStyle = {
        backgroundImage: `url(${missionbackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
    };

    const overlayStyle = {
        position: 'absolute',
        top: '55%',  // Center the overlay vertically
        left: '50%',  // Center the overlay horizontally
        transform: 'translate(-50%, -50%)',  // Adjust the position based on the element's dimensions
        width: '80%',
        height: '80%',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '40px',
        color: '#333',
        borderRadius: '10px',
    };

    const textStyle = {
        textAlign: 'left',
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
                    <h2 className="text-4xl font-bold mb-6 custom-text-color">Our Mission</h2>
                    <div className="text-xl text-gray-800" style={textStyle}>
                        <p>
                            MOVE is a community of students dedicated to exploring the intersection between business and social good.
                        </p>
                        <p>
                            Our mission is to develop the next generation of socially conscious business leaders through fostering:
                        </p>
                        <ul style={{ marginLeft: '20px', marginBottom: '16px', listStyleType: 'disc' }}>
                            <li style={paragraphStyle}>
                                Understanding of key concepts through educational and professional events
                            </li>
                            <li style={paragraphStyle}>
                                Hands-on experience connecting with our community through service events
                            </li>
                            <li style={paragraphStyle}>
                                Relationships with other individuals and organizations passionate about social good
                            </li>
                        </ul>
                        <p>
                            VISION: To become the driving force in the creation of a socially conscious, impact-driven student body at USC.
                        </p>
                    </div>
                    <iframe src="https://player.vimeo.com/video/439019605?h=6954bce4a5" className="rounded-t float-right duration-1000 w-full lg:w-2/3  lg:ml-6" style={{width: '100%', height:'100%'}} allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Home;
