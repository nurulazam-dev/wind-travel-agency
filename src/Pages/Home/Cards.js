import React, { useState } from 'react';
import { service } from '../../data';

const Cards = () => {
    const [index, setIndex] = useState(1);
    const { cards } = service;
    return (
        <>
            <div className='flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[15px]'>
                {cards.map((card, cardIndex) => {
                    const { icon, title, subtitle } = card;
                    return (
                        <div key={cardIndex}>
                            <div onClick={() => setIndex(cardIndex)} className={`${index === cardIndex && 'bg-white shadow-2xl'
                                }  w-[350px] h-[350px] flex flex-col justify-center items-center mx-auto p-[65px] text-center rounded-[16px] cursor-pointer transition-all`}>
                                <div className='mb-6'><img src={icon} alt='' /></div>
                                <div className='mb-3 text-[20px] font-medium'>{title}</div>
                                <p className='mb-6 text-[16px] text-light'>{subtitle}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Cards;