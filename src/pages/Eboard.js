import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar/NavBar';
import eboard from '../images/eboard.png';
import executive1 from '../images/eboard/alextse.jfif';  // Replace with the actual image paths
import executive2 from '../images/eboard/tklee.jfif';
import executive3 from '../images/eboard/gabrielarosenfield.jfif';
import executive4 from '../images/eboard/jessjaing.jfif';
import executive5 from '../images/eboard/emilylee.jfif';
import executive6 from '../images/eboard/lillianhsiao.jfif';
import executive7 from '../images/eboard/sheilavictor.jfif';
import executive8 from '../images/eboard/ryanchang.jfif';
import executive9 from '../images/eboard/IMG_3529.png';
import executive10 from '../images/eboard/alissahuang.jfif';
import executive11 from '../images/eboard/Liang_Jessica.png';
import executive12 from '../images/eboard/hafsa.jfif';
import executive13 from '../images/eboard/jaclyn.jfif';
import executive14 from '../images/eboard/jamie.jfif';
import executive15 from '../images/eboard/aidanwillaism.jfif';

const ExecutiveMember = ({ photo, name, position }) => (
  <div className="flex flex-col items-center mb-8">
    <img src={photo} alt={name} className="w-60 h-60 rounded-full mb-4 mr-5" />
    <div className="text-center">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-gray-600">{position}</p>
    </div>
  </div>
);

const Pres = ({ photo, name, position }) => (
  <div className="flex flex-col items-center mb-8 ml-8">
    <img src={photo} alt={name} className="w-60 h-60 rounded-full mb-4" />
    <div className="text-center">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-gray-600">{position}</p>
    </div>
  </div>
);


const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${eboard})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
  };
  const teamTextStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -10%)', // Adjust the percentage to change the vertical position
    textAlign: 'center',
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="eboard" id="eboard" style={backgroundStyle}>
          <div className="my-4 py-4 fadeIn" style={teamTextStyle}>
              <h2 className="my-2 text-center text-5xl text-white uppercase font-bold">Our Team</h2>
              
              <div className='flex justify-center'>
                  <div className='w-48 border-b-4 border-white'></div>
              </div>
          </div>
      </div>
      <section className="container mx-auto my-16 px-4 ">
        <h2 className="text-4xl font-bold mb-8 text-center custom-text-color">Our Eboard</h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap items-start h-full">
            <Pres photo={executive1} name="Alex Tse" position="President" />
            <Pres photo={executive2} name="Khue (TK) Lee" position="VP (External Affairs)" />
            {/* <Pres photo={executive3} name="Gabriela Rosenfeld" position="VP (External Affairs)" />
            <Pres photo={executive4} name="Jessica Jaing" position="VP (Internal Affairs)" /> */}
            <Pres photo={executive5} name="Emily Lee" position="VP (Internal Affairs)" />
          </div>
        </div>
      </section>
      <section className="greyBackground">
      <h2 className="text-4xl font-bold mb-8 text-center custom-text-color ">Our Internal Team</h2>
        <div className="flex flex-wrap items-start justify-center">
          <ExecutiveMember photo={executive6} name="Lillian Hsiao" position="Director of Communications" />
          <ExecutiveMember photo={executive7} name="Sheila Victor" position="Director of Marketing" />
          <ExecutiveMember photo={executive8} name="Ryan Chang" position="Assistant Director of Marketing" />
          <ExecutiveMember photo={executive9} name="Tanisha Chopra" position="Director of Finance" />
          <ExecutiveMember photo={executive10} name="Alissa Huang" position="Director of Membership Engagement" />
          <ExecutiveMember photo={executive11} name="Jessica Liang" position="Director of Socials" />
        </div>
      </section>

      <section className="greyBackground">
        <h2 className="text-4xl font-bold mb-8 text-center custom-text-color">Our External Team</h2>
        <div className="flex flex-wrap items-start justify-center">
          <ExecutiveMember photo={executive12} name="Hafsa Chaudhry" position="Director of MCSD" />
          <ExecutiveMember photo={executive13} name="Jaclyn Mehring" position="Director of Community Service" />
          <ExecutiveMember photo={executive14} name="Jamie Aguilar" position="Director of Initiatives" />
          <ExecutiveMember photo={executive15} name="Aidan Williams" position="Director of Professional Events" />
        </div>
      </section>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
  
  
