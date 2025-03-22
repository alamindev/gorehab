import React from 'react';

const About = () => {
    return (
        <section className='relative py-12 sm:py-16 z-1'>
             <img className='absolute right-0 top-10 sm:top-12 md:top-16 lg:top-20 -z-1' src="/images/right.png" alt="right" />
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h1 className="font-beatrice font-normal text-headText text-2xl sm:text-3xl md:text-[44px] leading-[1.3] ">
                        About Us
                    </h1>

                    <div className='max-w-4xl mx-auto '>
                        <p className="font-light text text-sm md:text-lg text-[#757575] leading-normal mt-2 mb-6">
                            We are a young startup from the ARTORG Center for Biomedical Engineering Research at the University of Bern. Our goal is to redefine rehabilitation through innovative, interactive, and data-driven solutions, with our first solution being the DextEgg System.
                        </p>
                        <p className="font-light text text-sm md:text-lg text-[#757575] leading-normal mt-2 mb-6">
                            We are passionate about providing effective and motivating therapy for individuals with rehabilitative needs—independent of location and time. By leveraging digital technologies, we aim to revolutionize therapy both in clinics and beyond, fostering long-term improvements in independent daily living.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;