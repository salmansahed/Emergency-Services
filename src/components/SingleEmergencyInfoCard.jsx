import React, { useState } from 'react';

const SingleEmergencyInfoCard = ({infoCard}) => {
    const {name, name_en, number, category, icon} = infoCard;
    let [heart, setHeart] = useState(true);
    const loverHeart = () => {
        setHeart(!heart)
    }

    const copyNumber = () => {
        navigator.clipboard.writeText(number);
        alert(`Number Copied: ${number}`)
    }

    const callNumber = () => {
        window.location.href = `tel:${number}`;
    }
    return (
      <div className="bg-white shadow-[0_35px_1000px_-15px_rgba(0,0,0,0.3)] rounded p-6 relative">
        <div className="absolute right-6 text-2xl" onClick={loverHeart}>
          {heart ? (
            <i class="fa-regular fa-heart"></i>
          ) : (
            <i class="fa-solid fa-heart"></i>
          )}
        </div>
        <img
          className="w-15.5 border p-2 rounded border-green-300 bg-green-200"
          src={icon}
          alt=""
        />
        <div className="my-4 space-y-1">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-[#5C5C5C]">{name_en}</p>
        </div>
        <div className="mb-6 space-y-2">
          <h2 className="text-3xl font-bold">{number}</h2>
          <p className="text-[#5C5C5C] border inline-block px-3 rounded-full bg-gray-200 py-0.5">
            {category}
          </p>
        </div>
        <div className="flex justify-between gap-5">
          <button onClick={() => copyNumber()} className="border w-full rounded cursor-pointer select-none py-1 text-[#5C5C5C] border-[#5C5C5C] bg-gray-100 shadow hover:rounded-full">
            <i class="fa-solid fa-copy"></i> Copy
          </button>
          <button onClick={()=> callNumber()} className="border w-full rounded cursor-pointer select-none py-1 bg-green-600 border-none shadow text-white hover:rounded-full">
            <i class="fa-solid fa-phone"></i> Call
          </button>
        </div>
      </div>
    );
};

export default SingleEmergencyInfoCard;