import React from 'react';
import { footerData } from '../../data';
import fbIcon from '../../Assets/Icons/fb.png';
import insIcon from '../../Assets/Icons/instagam.png';
import twitIcon from '../../Assets/Icons/twitter.png';
import pStoreIcon from '../../Assets/Icons/google-play.png';
import aStoreIcon from '../../Assets/Icons/apple-store.png';
import wTIcon from '../../Assets/Icons/footerIcon.png';

const DetailsFooter = () => {
    const { datas } = footerData;
    return (
        <section className='section mt-10'>
            <div className='container mx-auto footer text-base-content'>
                <div className='mx-auto my-4'>
                    <div className="flex items-center">
                        <img className='w-12' src={wTIcon} alt="" />
                        <p className='text-[32px] font-semibold'>WindTravels</p>
                    </div>
                    <div className='text-[13px]'>
                        <p>Book your trip in minute, get full.</p>
                        <p>Control for much longer.</p>
                    </div>
                </div>
                {datas.map((data) => {
                    const { title, subtitle1, subtitle2, subtitle3 } = data;
                    return (
                        <div className="mx-auto">
                            <span class="mb-4 font-semibold text-[21px]">{title}</span>
                            <a href="/" class="link link-hover text-[18px] mb-2">{subtitle1}</a>
                            <a href="/" class="link link-hover text-[18px] mb-2">{subtitle2}</a>
                            <a href="/" class="link link-hover text-[18px] mb-2">{subtitle3}</a>
                        </div>
                    )
                })}

                <div className='mx-auto'>
                    <div className="flex mx-auto items-center">
                        <a href="/" className="link link-hover"><img src={fbIcon} alt="" /></a>
                        <a href="/" className="link link-hover"><img src={insIcon} alt="" /></a>
                        <a href="/" className="link link-hover"><img src={twitIcon} alt="" /></a>
                    </div>
                    <div className="mx-auto">
                        <p className='text-[20px] mb-2'>Discover our app</p>
                    </div>
                    <div className="flex">
                        <a href="/" className="link mx-2 link-hover"><img src={pStoreIcon} alt="" /></a>
                        <a href="/" className="link mx-2 link-hover"><img src={aStoreIcon} alt="" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailsFooter;