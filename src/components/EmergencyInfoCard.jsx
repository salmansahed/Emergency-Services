import React, { use } from 'react';
import SingleEmergencyInfoCard from './SingleEmergencyInfoCard';

const EmergencyInfoCard = ({emergencyInfoPromise}) => {
    const emergencyInfoData = use(emergencyInfoPromise)
    console.log(emergencyInfoData);
    return (
      <div className="grid grid-cols-4 gap-6 w-11/12 mx-auto mt-6">
        {emergencyInfoData.map((infoCard) => (
          <SingleEmergencyInfoCard
            key={infoCard.id}
            infoCard={infoCard}
          ></SingleEmergencyInfoCard>
        ))}
      </div>
    );
};

export default EmergencyInfoCard;