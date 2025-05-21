import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';


const Countup = () => {
    const [showCountUp, setShowCountUp] = useState(false);
    const countUpRef = useRef();

    useEffect(() => {
        const onScroll = () => {
            if (!countUpRef.current) return;
            const top = countUpRef.current.getBoundingClientRect().top;
            if (top < window.innerHeight && !showCountUp) {
                setShowCountUp(true);
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [showCountUp]);

    return (
        <div>
            <h3 className='text-3xl text-center font-bold'>We Provide Best Medical Services</h3>
            <p className='text-center py-2'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            <div className="flex justify-center gap-5">
                <div className=" text-start bg-white py-7 pl-8 pr-30 rounded-2xl" ref={countUpRef}>
                    <img src="Group.png" alt="" />
                    <p className='text-5xl font-bold py-2'>
                        {showCountUp && <CountUp start={0} end={199} duration={3} suffix="+" />}
                    </p>
                    <p className='text-gray-500 text-xl'>Total Doctors</p>
                </div>
                <div className=" text-start bg-white py-7 pl-8 pr-30 rounded-2xl">
                    <img src="fi_7804340.png" alt="" />
                    <p className='text-5xl font-bold py-2'>
                        {showCountUp && <CountUp start={0} end={467} duration={3} suffix="+" />}
                    </p>
                    <p className='text-gray-500 text-xl'>Total Reviews</p>
                </div>
                <div className=" text-start bg-white py-7 pl-8 pr-30 rounded-2xl">
                    <img src="fi_2854545.png" alt="" />
                    <p className='text-5xl font-bold py-2'>
                        {showCountUp && <CountUp start={0} end={1900} duration={3} suffix="+" />}

                    </p>
                    <p className='text-gray-500 text-xl'>Patients</p>
                </div>
                <div className=" text-start bg-white py-7 pl-8 pr-30 rounded-2xl">
                    <img src="fi_3160069.png" alt="" />
                    <p className='text-5xl font-bold py-2'>
                        {showCountUp && <CountUp start={0} end={300} duration={3} suffix="+" />}

                    </p>
                    <p className='text-gray-500 text-xl'>Total Stuffs</p>
                </div>
            </div>
        </div>
    );
};

export default Countup;