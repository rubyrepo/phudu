import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const MyBookings = () => {
    const [loading, setLoading] = useState(true);
    const [appointments, setAppointments] = useState([]);
    const [alldoc, setAlldoc] = useState([]);

    useEffect(() => {
        // Fetch doctor data
        fetch("doctors.json")
            .then(res => res.json())
            .then(data => {
                setAlldoc(data);
                console.log("Doctors Data: ", data); // Debugging line
            });

        // Load appointments from localStorage
        const storedDataStr = localStorage.getItem("appoinmentList");
        if (storedDataStr) {
            const appointmentsData = JSON.parse(storedDataStr);
            setAppointments(appointmentsData);
            console.log("Appointments Data: ", appointmentsData); // Debugging line
        }

        // Set loading to false after 1.5s
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    // Convert appointment IDs from string to number and filter matched doctors
    const matchedDoctors = alldoc.filter(doc =>
        appointments.some(appointment => Number(appointment) === doc.id) // Compare as numbers
    );

    // Cancel appointment function
    const cancelAppointment = (id) => {
        console.log("Before cancel:", appointments);  // Debugging line
    
        // Convert the `id` to a string to match the format of the items in appointments
        const updatedAppointments = appointments.filter(appointment => appointment !== String(id));
    
        console.log("After cancel:", updatedAppointments);  // Debugging line
        setAppointments(updatedAppointments);
        localStorage.setItem("appoinmentList", JSON.stringify(updatedAppointments));
    };
    
    


    // Loading UI
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-dots loading-xl"></span>
            </div>
        );
    }

    return (
        <div className="p-5 px-30">
            {appointments.length === 0 ? (
                <div className='flex flex-col justify-center text-center mt-30 mb-50'>
                    <h3 className='font-bold text-3xl'>You have not booked any appointment yet</h3>
                    <p className='text-gray-500 py-4'>
                        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
                    </p>
                    <Link to={'/'}>
                        <button className='cursor-pointer bg-[#176ae5] px-4 py-2 rounded-md text-white text-md font-semibold'>
                            Book an appointment
                        </button>
                    </Link>
                </div>
            ) : (
                <div className="appointments-container pb-70">
                    {matchedDoctors.length > 0 ? (
                        matchedDoctors.map((doctor, index) => (
                            <div key={index} className="appointment-card bg-white p-4 my-4 rounded-lg shadow-md">
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <p className="text-xl font-semibold">{doctor.name}</p>
                                        <p className="text-sm text-gray-500">{doctor.speciality} - {doctor.education}</p>
                                    </div>
                                    <p className='text-gray-500'>Appointment Fee: <span className='text-[#176ae5] font-bold'>{doctor.fee}</span> Euro + VAT</p>
                                </div>
                                <hr className="border-t border-dashed border-gray-400 mt-2" />
                                <button
                                    onClick={() => {
                                        console.log("Appointment ID to cancel: ", doctor.id);
                                        cancelAppointment(doctor.id);
                                    }}
                                    className="mt-4 border border-red-500 text-red-500 font-semibold px-184 py-2 rounded-full cursor-pointer"
                                >
                                    Cancel Appointment
                                </button>

                            </div>
                        ))
                    ) : (
                        <p>No matched doctors found for your appointments.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default MyBookings;
