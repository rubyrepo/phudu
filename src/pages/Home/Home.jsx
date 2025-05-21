import React, { useEffect, useState } from 'react';
import Our_doc from '../../components/body/Our_doc';
import Countup from '../../components/body/Countup';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // show loader for 1.5 seconds

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-dots loading-xl"></span>
            </div>
        );
    }

    return (
        <div>
            <div className='border-white rounded-2xl mx-10 border-[3px] my-10 bg-[#EFEFEF] bg-gradient-to-b from-[#EFEFEF] via-[#EFEFEF] to-[#FEFEFE]'>
                <div className='py-10'>
                    <h2 className='text-5xl font-bold text-center'>Dependable Care, Backed by Trusted <br /> Professionals.</h2>
                    <p className='px-26 text-center py-4'>
                        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
                        Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                    </p>
                    <div className='flex justify-center items-center gap-3'>
                        <input type="text" placeholder='Search any doctor...' className='bg-white py-3 pr-96 pl-5 rounded-3xl border border-gray-300' />
                        <button type="submit" className='bg-[#176AE5] py-3 rounded-3xl px-5 text-white'>Search Now</button>
                    </div>
                    <div className='flex justify-center items-center gap-5 py-5'>
                        <img className='rounded-2xl' src="https://images.unsplash.com/photo-1606318313647-137d1f3b4d3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3Dnp" alt="" />
                        <img className='rounded-2xl' src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D" alt="" />
                    </div>
                </div>
            </div>
            <Our_doc />
            <Countup />
        </div>
    );
};

export default Home;
