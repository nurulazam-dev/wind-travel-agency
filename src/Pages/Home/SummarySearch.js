import React from 'react';
import { summaryData } from '../../data';

const SummarySearch = () => {
    const { datas } = summaryData;

    return (
        <div className='bg-slate-200/50 rounded-xl m-2 p-5 flex items-center w-full'>
            <div className="stats shadow">
                {datas.map((data) => {
                    const { icon, errowIcon, title, subtitle } = data;
                    return (
                        <div className="stat flex items-center">
                            <div>
                                <img src={icon} alt="" />
                            </div>
                            <div>
                                <h4 className="text-[12px] font-semibold">{title}</h4>
                                <h3 className="text-[16px] font-bold">{subtitle}</h3>
                            </div>
                            <div>
                                <img src={errowIcon} alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mx-3 text-white btn-warning">Search</button>
            </div>
        </div>
    );
};

export default SummarySearch;