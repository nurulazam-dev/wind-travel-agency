import React from 'react';
import { sell } from '../../data';

const DestinationsCards = () => {
    const { cards } = sell;
    return (
        <>
            <div className='flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[15px] justify-center items-center'>
                {cards.map((card) => {
                    const { icon, title, price, subtitle } = card;
                    return (
                        <div class="card card-compact w-96 bg-base-100 shadow-xl mx-5">
                            <div class="card-body">
                                <img src={icon} alt="Service" />
                                <div className='mb-3 text-[18px] flex text-center'>
                                    <p>{title}</p>
                                    <p>${price}k</p>
                                </div>
                                <p className='mb-6 text-[16px] text-light text-center'>{subtitle}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default DestinationsCards;