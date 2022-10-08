import React from 'react';
import bgImg from '../../Assets/hero/bg.png';
import bgBoatImg from '../../Assets/hero/bgBoat.png';
import planeImg from '../../Assets/hero/plane.png';
import Navbar from '../Shared/Navbar';
import MostPopularCard from './MostPopularCard';
import SummarySearch from './SummarySearch';

const Hero = () => {
    return (
        <div className='section' style={{ background: `url(${bgImg})`, backgroundSize: 'cover' }}>
            <Navbar />
            <div className="" >
                <div className="flex justify-between items-center">
                    <div className='ml-8 px-4'>
                        <p className='text-[16px] font-semibold uppercase text-white'>Mountains | Plains | Beaches</p>
                        <div className="text-[47px] font-bold text-white">
                            <h3>Spend your vacation</h3>
                            <div className="flex items-center">
                                <h3>with our activites</h3>
                                <img src={planeImg} alt="" />
                            </div>
                        </div>
                        <MostPopularCard />
                        <SummarySearch />
                    </div>
                    <div className="">
                        <img src={bgBoatImg} alt='' className="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;