import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='py-6 px-30 flex items-center justify-between plus-jakarta'>
            <div className="flex items-center">
                <img src="Vector.png" alt="logo" />
                <h1 className='text-4xl font-bold plus-jakarta px-2'>Phudu</h1>
            </div>
            <div className="">
                <ul className='flex gap-10 text-gray-700 '>
                    <li className='hover:underline hover:decoration-blue-500'>
                    <NavLink to="/" end>Home</NavLink></li>
                    <li className='hover:underline hover:decoration-blue-500'>
                    <NavLink to="/MyBookings">My Bookings</NavLink>
                    </li>
                    <li className='hover:underline hover:decoration-blue-500'>
                    <NavLink to="/Blogs">Blogs</NavLink>
                    </li>
                    <li className='hover:underline hover:decoration-blue-500'>
                    <NavLink to="/contact-us">Contact Us</NavLink>
                    </li>
                </ul>
            </div>
            <div className="bg-[#176AE5] px-4 py-3 text-white font-semibold rounded-full">
                <button>
                    <NavLink to="/contact-us">Emergency</NavLink>
                </button>
            </div>
        </div>
    );
};

export default Navbar;