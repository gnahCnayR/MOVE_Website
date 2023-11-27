import React from 'react';
import nu from '../images/clients/nuleep.png';
import es from '../images/clients/emilyshance.jpg';
import tms from '../images/clients/tms.png';

const clientImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Clients = () => {
    return (
        <div className="mt-8 bg-white">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl custom-text-color uppercase font-bold">Our Partners</h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 custom-border-color'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold custom-text-color">Just a few of our amazing partners.</h2>
                    </div>

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid sm:grid-cols-3 lg:grid-cols-3">
                        <div style={clientImage} className= "overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/6">
                            <img src={nu} alt="client" />                           
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={es} alt="client" />                            
                        </div> 

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={tms} alt="client" />                            
                        </div>

                                           
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;