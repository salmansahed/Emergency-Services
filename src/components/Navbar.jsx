import React from 'react';
import Logo from '../assets/image/Logo.png'

const Navbar = ({copyCount, favourite}) => {
    return (
      <div className="flex justify-between w-11/12 mx-auto items-center py-4">
        <div>
          <img className="w-37.5" src={Logo} alt="" />
        </div>
        <div className="flex items-center gap-6">
          <p className="border px-4 py-1 rounded-full border-green-400 bg-green-200 select-none">
            {favourite} <i className="fa-solid fa-heart text-red-500" />
          </p>
          <button className="bg-green-600 text-white px-4 py-1 rounded-full">
            {copyCount} Copy
          </button>
        </div>
      </div>
    );
};

export default Navbar;