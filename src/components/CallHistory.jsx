import React from 'react';

const CallHistory = ({calledName}) => {
  if (!calledName || calledName.length === 0) {
    return null;
  }
  console.log(calledName);
  return (
    <div>
      {
        calledName.map(item => (
          <div className="flex items-center justify-between bg-white px-4 py-2 mb-3 rounded shadow-sm shadow-black">
            <div>
              <h2 className=" font-semibold">{item.name}</h2>
              <p className="">{item.number}</p>
            </div>
            <div>
              <p>{item.date}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default CallHistory;