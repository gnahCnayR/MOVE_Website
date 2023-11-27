import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar/NavBar2';
import temp from '../images/appclose.png'

const Home = () => {
    const backgroundStyle = {
        backgroundImage: `url(${temp})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
    };

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div style={backgroundStyle} />
            <div>
                <Footer />
            </div>
        </>

    )
}

export default Home;

