import React from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router';
import { addToStoredDB } from '../../utilities/addToDB';

const DoctorDetails = () => {
    const { id } = useParams();
    const docId = parseInt(id);
    const data = useLoaderData();
    const navigate = useNavigate();

    const singleDoc = data.find(doc => doc.id == docId);

    const handleAppoinmentAsClick = (id, name) => {
        const result = addToStoredDB(id, name);

        if (result === "newBooking") {
            navigate('/MyBookings');
        }
    }

    return (
        <div className='px-30'>
            <div className="bg-white rounded-2xl py-10">
                <h2 className='text-2xl font-bold text-center'>Doctor’s Profile Details</h2>
                <p className='text-center py-4'>
                    Discover detailed information about the doctor, including their experience and areas of expertise.
                    Make informed decisions for your health journey.
                    <br />
                    Learn about the doctor’s qualifications and specialties.
                    Your trusted partner in better healthcare starts here.
                </p>
            </div>
            <div className="bg-white flex rounded-2xl my-10 items-center">
                <img className='w-120 rounded-2xl pl-10 py-10' src={singleDoc.image} alt={singleDoc.name} />
                <div className="py-10 pl-10">
                    <h1 className='text-4xl font-bold'>{singleDoc.name}</h1>
                    <p className='text-gray-500 py-2 text-xl'>{singleDoc.speciality}</p>
                    <p className='text-gray-700 text-md'>Working at</p>
                    <p className='py-2 text-3xl font-semibold'>{singleDoc.workplace}</p>
                    <p className='pb-6 text-gray-500'>{singleDoc.designation}</p>
                    <hr className="border-t border-dashed border-gray-400" />
                    <p className='my-2'>&reg; Registration Number : {singleDoc.registration_number}</p>
                    <hr className="border-t border-dashed border-gray-400" />

                    <div className="mt-4">
                        <h3 className="text-xl font-semibold mb-2">Available Days:</h3>
                        <div className="flex gap-3 flex-wrap">
                            {singleDoc.availability.map((day, index) => (
                                <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{day}</span>
                            ))}
                        </div>
                    </div>

                    <p className='pt-10 text-2xl'>
                        Consultation Fee:
                        <span className='text-[#176AE5] font-bold'> {singleDoc.fee} </span>
                        <span className='text-gray-500'>(incl. Vat) </span>
                        <span className='text-[#176AE5]'>Per consultation</span>
                    </p>
                </div>
            </div>

            <div className='bg-white rounded-2xl'>
                <h2 className='text-center font-bold text-3xl pt-10 pb-4'>Book an Appointment</h2>
                <hr className="border-t border-dashed border-gray-400 mx-10" />
                <div className="flex justify-between mx-10 py-4 items-center">
                    <p className='font-bold text-xl'>Availability</p>
                    <p style={{ border: '2px solid rgba(9, 152, 47, 0.2)', backgroundColor: 'rgba(9, 152, 47, 0.1)' }} className='text-[#09982F] py-2 px-4 rounded-full'>
                        Doctor Available Today
                    </p>
                </div>
                <hr className='mx-10 py-2 border-gray-300' />
                <p style={{ backgroundColor: 'rgba(255, 160, 0, 0.1)' }} className='text-[#FFA000] mx-10 rounded-2xl px-2'>
                    Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                </p>
                <button onClick={() => handleAppoinmentAsClick(id, singleDoc.name)} className='mx-10 bg-[#176AE5] text-white px-168 cursor-pointer my-6 py-3 rounded-full text-xl font-bold'>
                    Book Appointment Now
                </button>
            </div>
        </div>
    );
};

export default DoctorDetails;
