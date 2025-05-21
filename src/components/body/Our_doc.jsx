import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Our_doc = () => {
    const [allDoc, setAlldoc] = useState([]);
    const [visibleDocs, setVisibleDocs] = useState(6);

    useEffect(() => {
        fetch("doctors.json")
            .then(res => res.json())
            .then(data => {
                setAlldoc(data);
            })
    }, []);


    const handleViewAll = () => {
        setVisibleDocs(allDoc.length);
    };

    return (
        <div className='px-30 pb-20'>
            <h3 className='text-center text-4xl font-bold'>Our Best Doctors</h3>
            <p className='px-26 text-center py-4'>
                Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
                Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>

            <div className="grid grid-cols-3">
                {allDoc.slice(0, visibleDocs).map((doctor, index) => (
                    <div key={index} className="card w-120 shadow-sm bg-white rounded-lg  hover:shadow-md transition my-10  pb-5">
                        <figure className="px-10 pt-10">
                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="rounded-xl" />
                        </figure>
                        <div className="flex pt-5 gap-4 items-center mx-10">
                            <p className='py-1 px-4 rounded-4xl border' style={{ backgroundColor: 'rgba(9, 152, 47, 0.1)', border: '2px solid rgba(9, 152, 47, 0.2)' }}>Available</p>
                            <p className='py-1 pl-4 pr-2 rounded-4xl border' style={{ backgroundColor: 'rgba(23, 106, 229, 0.1)', border: '2px solid rgba(23, 106, 229, 0.2)' }}>{doctor.experience} Experience</p>
                        </div>
                        <h4 className="text-3xl py-2 font-semibold mb-2 mx-10">{doctor.name}</h4>
                        <p className="mx-10 text-gray-500">{doctor.speciality}</p>
                        <hr className="border-t border-dashed border-gray-400 my-4 mx-10" />
                        <p className='text-xl mx-10 text-gray-500'> &reg;  Reg No: {doctor.registration_number}</p>
                        <Link to={`DoctorDetails/${doctor.id}`}>
                            <button
                                className='mx-10 cursor-pointer py-2 px-34 font-semibold text-[#176AE5] my-4 border border-[#176AE5] text-xl rounded-2xl transition-all duration-300 ease-in-out hover:bg-[#176AE5] hover:text-white hover:border-[#176AE5]'>
                                View Details
                            </button>
                        </Link>
                    </div>
                ))}
            </div>

            {visibleDocs < allDoc.length && (
                <div className="text-center my-4">
                    <button
                        onClick={handleViewAll}
                        className="py-2 px-6 font-semibold text-white bg-[#176AE5] cursor-pointer text-3xl  rounded-2xl hover:bg-white hover:text-[#176AE5] hover:border hover:border-[#176AE5] transition-all duration-300 ease-in-out">
                        View All
                    </button>
                </div>
            )}
        </div>
    );
};

export default Our_doc;
