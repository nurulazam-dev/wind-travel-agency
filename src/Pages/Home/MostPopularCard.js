import React from 'react';
import { mostPopularData } from '../../data';

const MostPopularCard = () => {
    const { title, leftErrowIcon, datas } = mostPopularData;

    return (
        <div className='my-6 py-4'>
            <div className="flex justify-between">
                <h4 className='uppercase text-[24px] font-bold text-white'>{title}</h4>
                <img src={leftErrowIcon} alt="" className='mr-2 pr-3' />
            </div>
            <div className="flex my-5">

                {datas.map((data) => {
                    const { icon, people, title, usersIcon } = data;
                    return (
                        <div class="card card-compact bg-base-100 shadow-xl mr-10">
                            <div class="card-body">
                                <img src={icon} alt="Service" />
                                <div className=''>
                                    <h6 className='font-bold text-[16px] my-2'>Trip To {title}</h6>
                                    <div className="flex">
                                        <img src={usersIcon} alt="" />
                                        <p className='font-semibold text-[12px] mx-2 '>{people} people going</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default MostPopularCard;