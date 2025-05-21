import React from 'react';
import Navbar from '../../../components/Header/Navbar';

const Error = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="flex flex-col justify-center items-center min-h-screen text-center p-6">
                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/window-bug.png" alt="window-bug" />
                <h1 className="text-4xl font-bold mt-4">Error 404</h1>
                <h2 className="text-xl mt-2">It looks like something went wrong.</h2>
                <p className="text-gray-600 mt-2 max-w-md">
                    Don't worry, our team is already on it. Please try refreshing the page or come back later.
                </p>
                <button className="mt-6 bg-[#176AE5] text-white px-5 py-2 rounded hover:bg-blue-700 transition">
                    <a href="/">BACK HOME</a>
                </button>
            </div>
        </>
    );
};

export default Error;
