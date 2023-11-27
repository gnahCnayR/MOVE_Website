import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar/NavBar';
import temp from '../images/initbackground.png';
import skyline from '../images/skyline.png';
import tms from '../images/clients/tms.png';
import ems from '../images/clients/emilyshance.jpg';
import infop from '../images/infop.jpg';
import foodreco from '../images/foodreco.webp';
import mentalhealth from '../images/mentalhealth.webp';
import beach from '../images/IMG_1687.jpg';
import mcsd from '../images/mcsd.webp';

const InitiativeItem = ({ title, description, image }) => (
  <div className="flex my-8 mx-auto max-w-2xl">
    <img src={image} alt={title} className="w-80 h-80 rounded mr-12" />
    <div>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
      {/* Add more content specific to the initiative */}
    </div>
  </div>
);

const Initiatives = () => {
  const backgroundStyle = {
    backgroundImage: `url(${temp})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh',
    position: 'relative',
    overflow: 'hidden',
  };
  const teamTextStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -80%)', // Adjust the percentage to change the vertical position
    textAlign: 'center',
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div style={backgroundStyle}>
        <div className="eboard" id="eboard" style={backgroundStyle}>
            <div className="my-4 py-4 fadeIn" style={teamTextStyle}>
                <h2 className="my-2 text-center text-5xl text-white uppercase font-bold">Initiatives</h2>
                
                <div className='flex justify-center'>
                    <div className='w-48 border-b-4 border-white'></div>
                </div>
            </div>
        </div>
      </div>
      <div className="container mx-auto my-16 px-4">
        {/* <h1 className="text-4xl font-bold mb-8 text-center custom-text-color">Our Initiatives</h1> */}
        <InitiativeItem
          title="Marshall Community Service Day"
          description="MOVE is proud to host USC Marshall's official annual community service day, MCSD.

          This event is designed for students, faculty, and alumni of the Marshall community to come together, network, learn, and give back to the Los Angeles community through increased awareness on social issues and hands-on volunteering activities."
          image={mcsd}
        />
        <InitiativeItem
          title="Mental Health Podcast"
          description="Through this podcast, we want to shed more light on our mental health and wellbeing as students. Throughout the semester, we interview different professionals, psychology professors, clinical psychologists, mental health coordinators, as well as students. 

 

          You can check out the podcast's website, the podcast's episodes, and the podcast's instagram to learn more about it here: 
          
          https://linktr.ee/uschonestyhour
          
          https://www.instagram.com/uschonestyhour/  "
          image={mentalhealth}
        />
         <InitiativeItem
          title="Informational Pamphlets"
          description="Informational Pamphlets is an initiative where we create infographics through tools such as Canva, photoshop, and illustrator to talk about current issues and topics that we feel are important to raise awareness for. These will be posted on MOVE’s Instagram, website, and newsletter. "
          image={infop}
        />
         <InitiativeItem
          title="Emily Shane Foundation"
          description="Our driving mission is to empower underserved, disadvantaged middle school students with the resources they need to thrive in middle school and beyond. We not only offer individualized academic tutoring and mentorship, but we work hard to build relationships that are positive and have a lasting impact."
          image={ems}
        />
         <InitiativeItem
          title="Tiny. Mighty. Strong."
          description="We will have a group of MOVE mentors meet up with the mentees (high school students) to tutor them on how to best make a pitch for the product/service they would provide to their community. The students would then go through a ‘shark tank’ type scenario, pitch their idea, and win the investment to put their plan to use! "
          image={tms}
        />
         <InitiativeItem
          title="Beach Cleanup"
          description="Join our Beach Cleanup team committed to preserving our coastlines. We congregate regularly to remove litter from vital shores. Our deeds aim to raise awareness and inspire fellow citizens to contribute through environmental stewardship. With care in our hearts, we act on our duty as custodians of these beaches. Come make a difference with us!"
          image={beach}
        />
         <InitiativeItem
          title="Food Recovery and Delivery"
          description="The food recovery & delivery initiative works on spreading more awareness about food insecurity and possible solutions to help alleviate this issue within the Los Angeles County. The initiative works on volunteering for different nonprofits related to food distribution such as the LA Regional Food Bank, Dream Center, and etc. It also brings in speakers from social enterprises (such as Next Plate) to get real life perspectives of running social enterprises in this space."
          image={foodreco}
        />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Initiatives;
