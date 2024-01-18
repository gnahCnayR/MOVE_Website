import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar/NavBar';
import back from '../images/Initiativelead.png';
import executive6 from '../images/InitLead/noimage.png';
import executive7 from '../images/InitLead/krystinecalixstro.png';
import executive8 from '../images/InitLead/jonigo.jpg';
import executive9 from '../images/InitLead/hanaestrela.jpg';
import executive10 from '../images/InitLead/katiehahn.jpeg';
import executive11 from '../images/InitLead/ishika.jpg';

const ExecutiveMember = ({ photo, name, position }) => (
  <div className="flex flex-col items-center mb-8">
    <img src={photo} alt={name} className="w-60 h-60 rounded-full mb-4 mr-5" />
    <div className="text-center">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-gray-600">{position}</p>
    </div>
  </div>
);


const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${back})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '50vh',
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
  };
  const teamTextStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', // Adjust the percentage to change the vertical position
    textAlign: 'center',
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="eboard" id="eboard" style={backgroundStyle}>
          <div className="my-4 py-4 fadeIn" style={teamTextStyle}>
              <h2 className="my-2 text-center text-5xl text-white uppercase font-bold">Our Initiative Leads</h2>
              
              <div className='flex justify-center'>
                  <div className='w-48 border-b-4 border-white'></div>
              </div>
          </div>
      </div>
      <section className="container mx-auto my-16 px-4 ">
        <h2 className="text-4xl font-bold mb-8 text-center custom-text-color"></h2>
        <div className="flex flex-col items-center">
            <div className="flex flex-wrap items-start justify-center">
                <ExecutiveMember photo={executive6} name="Mayra Rios" position="Mental Health Podcast Lead" />
                <ExecutiveMember photo={executive7} name="Krystine Calixtro" position="Food Recovery Lead" />
                <ExecutiveMember photo={executive8} name="Joni Go" position="MCSD Lead" />
                <ExecutiveMember photo={executive9} name="Hana Estrela Chung Park" position="TMS Lead" />
                <ExecutiveMember photo={executive10} name="Katie Hahn" position="Informational Pamphlets Lead" />
                <ExecutiveMember photo={executive6} name="Jaela Bard" position="Beach Clean Up Lead" />
                <ExecutiveMember photo={executive11} name="Ishika Manghnani" position="Collective Voice Summit Lead" />
            </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
  
  
