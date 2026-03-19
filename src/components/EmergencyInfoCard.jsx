import React, { use } from 'react';
import SingleEmergencyInfoCard from './SingleEmergencyInfoCard';

const EmergencyInfoCard = ({emergencyInfoPromise}) => {
    const emergencyInfoData = use(emergencyInfoPromise)
    console.log(emergencyInfoData);
    return (
      <div className="flex flex-col md:flex-row justify-between w-11/12 mx-auto my-12 gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full md:w-[55%] lg:w-[65%] xl:w-[75%]">
          {emergencyInfoData.map((infoCard) => (
            <SingleEmergencyInfoCard
              key={infoCard.id}
              infoCard={infoCard}
            ></SingleEmergencyInfoCard>
          ))}
        </div>
        <div className="bg-green-300 w-full md:w-[45%] lg:w-[35%] xl:w-[25%] rounded shadow-md shadow-black/20">
          <div className='flex justify-between items-center px-5 my-4'>
            <p className='font-semibold'><i class="fa-regular fa-clock"></i> Call History</p>
            <button className='bg-blue-600 text-white px-6 cursor-grab py-1.5 rounded-full shadow-lg hover:rounded select-none'><i class="fa-solid fa-eraser"></i> Clear</button>
          </div>
        </div>
      </div>
    );
};

export default EmergencyInfoCard;