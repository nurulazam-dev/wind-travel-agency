import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import navLogo from '../../Assets/Icons/footerIcon.png';

const Navbar = () => {

    const navLinks = <>
        <li><NavLink to='/' className='text-xl '>Home</NavLink></li>
        <li><NavLink to='/aboutUs' className='text-xl '>About Us</NavLink></li>
        <li><NavLink to='/premium' className='text-xl '>Premium</NavLink></li>
        <li><NavLink to='/blogs' className='text-xl '>Blogs</NavLink></li>
        <li>
            <select className="select text-xl">
                <option selected>EN</option>
                <option>BE</option>
                <option>HI</option>
                <option>AR</option>
            </select>
        </li>
        <li><button className='btn btn-NavLink btn-outline  text-decoration-none fs-5'>Book Now</button></li>
    </>

    return (
        <>
            <div className="navbar w-full top-0 z-50 fixed lg:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-circle swap swap-rotate mx-2 lg:hidden">
                            <input type="checkbox" />
                            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu bg-base-100 menu-compact dropdown-content mt-3 p-2 shadow w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="">
                        <div className='flex items-center'>
                            <img src={navLogo} alt="" className='w-13' />
                            <h3 className='text-[32px] font-bold'>WindTravels</h3>
                        </div>
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal  gap-x-2 p-0">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </>

    );
};

export default Navbar;