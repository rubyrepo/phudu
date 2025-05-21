import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-white mt-20 py-10'>
            <div className="flex items-center justify-center ">
                <img src="Vector.png" alt="logo" />
                <h1 className='text-4xl font-bold plus-jakarta px-2'>Phudu</h1>
            </div>
            <div className="">
                <ul className='flex gap-10 text-gray-700 justify-center py-10'>
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
            <hr className='text-gray-300 mx-90' />
            <div className="flex justify-center items-center gap-8 pt-8">
                <a target='_blank' href="https://www.facebook.com/programmingherowebcourse">
                <img width="36" height="36" src="https://img.icons8.com/fluency/36/facebook-new.png" alt="facebook-new" />
                </a>
                <a target='_blank' href="https://www.instagram.com/programminghero/">
                <img width="36" height="36" src="https://img.icons8.com/fluency/36/instagram-new.png" alt="instagram-new.png" />
                </a>
                <a target='_blank' href="https://www.linkedin.com/company/programminghero/">
                <img width="36" height="48" src="https://img.icons8.com/fluency/36/linkedin-circled.png" alt="linkedin-circled" />
                </a>
                <a target='_blank' href="https://www.youtube.com/@ProgrammingHero">
                <img width="36" height="36" src="https://img.icons8.com/fluency/36/youtube-play.png" alt="youtube-play" />
                </a>
            </div>
        </div>
    );
};

export default Footer;