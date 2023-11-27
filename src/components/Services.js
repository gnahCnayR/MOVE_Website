import React from 'react';
import img3 from '../images/IMG_3568.jpg'; 
import img from '../images/IMG_1687.jpg';
import img4 from '../images/IMG_2588.jpg';
import img2 from '../images/IMG_2983.jpg';
import inspireImage from '../images/inspiration.svg';
import teamworkImage from '../images/teamwork.svg';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl custom-text-color uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 custom-border-color'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold custom-text-color">We are deeply committed to the growth and success of our members.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Community Service</h2>
                                    <p className="text-md font-medium text-center">
                                        We provide hands-on community service opportunities empowering student volunteers to serve the local community while developing leadership abilities and a commitment to civic responsibility.                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Initiatives</h2>
                                    <p className="text-md font-medium text-center">
                                        Our organization empowers student leaders, provides educational outreach to underserved youth, raises mental health awareness on campus, and more - enabling members to create positive social impact.                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Guest Speakers</h2>
                                    <p className="text-md font-medium text-center">
                                        Attend our panel events to hear from and network with professionals actively working to make an impact in their field and communities.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Workshops</h2>
                                    <p className="text-md font-medium text-center">
                                        We facilitate workshops that allow members to discover and develop important skills relevant to their future careers.
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>

            <section>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                <img src={inspireImage} alt="Inspire Image" className='text-blue-900 mb-4' width="100" height="100"/>
                            </div>
                            <h3 className="text-3xl custom-text-color font-bold">We <span className='font-black'>Inspire</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>Guided by a mission to inspire change, our club leverages over a decade of collective experience in social entrepreneurship. We provide tailored recommendations and strategies to empower your initiatives, reduce barriers, and amplify positive impacts within our community.</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                <img src={teamworkImage} alt="Teamwork Image" className='text-blue-900 mb-4' width="100" height="100"/>
                            </div>
                            <h3 className="text-3xl custom-text-color font-bold">We <span className='font-black'>Unite</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>Our strength lies in unity. We unite to amplify our impact, collaborating seamlessly with individuals, businesses, and communities. Together, we can achieve social good, foster innovation, and drive positive change in the world.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;