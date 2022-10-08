import React from 'react';
import destinationImg from '../../Assets/BookSteps/destination.png';
import paymentImg from '../../Assets/BookSteps/payment.png';
import reachImg from '../../Assets/BookSteps/reach.png';
import boracayImg from '../../Assets/BookSteps/boracay.png';
import mapImg from '../../Assets/BookSteps/map.png';
import sendImg from '../../Assets/BookSteps/send.png';
import buildingImg from '../../Assets/BookSteps/building.png';
import leftImg from '../../Assets/BookSteps/leaf.png';
import heartImg from '../../Assets/BookSteps/heart.png';

const BookSteps = () => {
    return (
        <div className="section my-7 py-7">
            <div className="container mx-auto">
                <div className='flex flex-row items-center'>
                    <div className='basis-1/2'>
                        <p className='text-[18px] font-semibold'>Easy and Fast</p>
                        <div className="text-[50px] font-bold">
                            <h3>Book your next trip</h3>
                            <h3>In 3 easy steps</h3>
                        </div>
                        <div className='flex my-3 py-3 items-center'>
                            <div>
                                <img src={destinationImg} alt="" />
                            </div>
                            <div className='mx-3 px-3'>
                                <h4 className='font-bold'>Choose Destination</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Urna, tortor tempus. </p>
                            </div>
                        </div>
                        <div className='flex my-3 py-3 items-center'>
                            <div>
                                <img src={paymentImg} alt="" />
                            </div>
                            <div className='mx-3 px-3'>
                                <h4 className='font-bold'>Make Payment</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Urna, tortor tempus. </p>
                            </div>
                        </div>
                        <div className='flex my-3 py-3 items-center'>
                            <div>
                                <img src={reachImg} alt="" />
                            </div>
                            <div className='mx-3 px-3'>
                                <h4 className='font-bold'>Reach Airport on Selected Date</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Urna, tortor tempus. </p>
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/2'>
                        <div class="card card-compact w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <img src={boracayImg} alt="Baracay" />
                                <div className='m-3'>
                                    <h3 className='mx-2 text-[18px] font-bold'>Trip To Boracay</h3>
                                    <div className="flex text-[18px] mt-3">
                                        <p className="px-2">14-29 June</p>
                                        <p className="px-2">by Lei Britz</p>
                                    </div>
                                </div>
                                <div className="flex m-2">
                                    <img src={leftImg} alt="" className='mx-2' />
                                    <img src={mapImg} alt="" className='mx-2' />
                                    <img src={sendImg} alt="" className='mx-2' />
                                </div>
                                <div className="flex m-3">
                                    <img src={buildingImg} alt="" className='mx-2' />
                                    <p className='text-[16px]'>24 people going</p>

                                    {/* <!-- The button to open modal --> */}
                                    <label htmlFor="my-modal-3" className="modal-button">
                                        <img src={heartImg} alt="" className='mx-3' />
                                    </label>

                                    {/* <!-- Put this part before </body> tag --> */}
                                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box relative">
                                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                            <div className='flex'>
                                                <div className="mx-2 px-2">
                                                    <div className="avatar">
                                                        <div className="w-16 rounded-full">
                                                            <img src={boracayImg} alt='' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mx-2 px-2">
                                                    <h6>Ongoing</h6>
                                                    <h3 className="text-lg font-bold mb-3">Trip To Baguio</h3>
                                                    <p className=" font-bold"><span>40%</span> completed</p>
                                                    <progress className="progress progress-primary" value="40" max="100"></progress>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BookSteps;