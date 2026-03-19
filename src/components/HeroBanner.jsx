import React from 'react';
import govLogo from "../assets/image/bd-gov-logo.png";

const HeroBanner = () => {
    return (
      <div className="flex flex-col items-center bg-linear-to-r from-[#0a502c] via-[#148048] to-[#0a502c] text-white py-6 md:py-10 text-center space-y-2 md:space-y-4 px-4">
        <img className="w-25" src={govLogo} alt="" />
        <h1 className='text-[30px] lg:text-[40px] font-bold'>জরুরি সেবা ডিরেক্টরি</h1>
        <p className='text-[18px] lg:text-[20px]'>Government Emergency Services at Your Fingertip – A Project by Government of the People’s Republic of Bangladesh</p>
      </div>
    );
};

export default HeroBanner;