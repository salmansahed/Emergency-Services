import React, { use, useState } from 'react';
import SingleEmergencyInfoCard from './SingleEmergencyInfoCard';
import CallHistory from './CallHistory';

const EmergencyInfoCard = ({emergencyInfoPromise, setCopyCount, copyCount, favourite, setFavourite}) => {
    const emergencyInfoData = use(emergencyInfoPromise);
    const [calledName, setCalledName] = useState([])
    return (
      <div className="flex flex-col md:flex-row justify-between w-11/12 mx-auto my-12 gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full md:w-[55%] lg:w-[65%] xl:w-[75%]">
          {emergencyInfoData.map((infoCard) => (
            <SingleEmergencyInfoCard
              key={infoCard.id}
              infoCard={infoCard}
              copyCount={copyCount}
              setCopyCount={setCopyCount}
              favourite={favourite}
              setFavourite={setFavourite}
              setCalledName={setCalledName}
            ></SingleEmergencyInfoCard>
          ))}
        </div>
        <div className="bg-green-300 w-full md:w-[45%] lg:w-[35%] xl:w-[25%] rounded shadow-md shadow-black/20 sticky top-10 self-start max-h-[90vh] flex flex-col">
          <div className="flex justify-between items-center px-5 my-4 shrink-0">
            <p className="font-semibold">
              <i className="fa-regular fa-clock"></i> Call History
            </p>
            <button onClick={()=> setCalledName([])} className="bg-blue-600 text-white px-6 cursor-grab py-1.5 rounded-full shadow-lg hover:rounded select-none">
              <i className="fa-solid fa-eraser"></i> Clear
            </button>
          </div>
          <div className="px-5 overflow-y-auto my-8 flex-1">
              <CallHistory calledName={calledName}></CallHistory>
          </div>
        </div>
      </div>
    );
};

export default EmergencyInfoCard;