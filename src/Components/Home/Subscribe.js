import React from 'react';
import subsImg from '../../Assets/Icons/subscribe.png';

const Subscribe = () => {
    return (
        <div>
            <div style={{ background: `url(${subsImg})`, backgroundSize: 'cover' }} className="mx-20 py-12">
                <h2 className='text-[33px] font-bold text-center'>Subscribe to get information, latest news and other
                    <br /> interesting offers about WindTravel</h2>
                <div className='flex mt-10 justify-center'>
                    <input type="text" placeholder="Your email" class="input input-md w-full max-w-xs shadow-xl" />
                    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-md mx-3">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;