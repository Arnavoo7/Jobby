import React, { useState } from 'react';
import light from "../images/light.png";
import night from "../images/night.png";
import Media from './Media';

const Navbar = () => {
  const [bg, setBg] = useState(true);

  const handleBg = () => {
    setBg(!bg);
    if (bg === true) {
      document.body.style.backgroundColor = '#36454F';
    } else {
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <div className="bg-black text-yellow-400 text-center flex items-center justify-between text-2xl font-mono italic h-16 fixed top-0 w-full">
      <Media />
      <span className="ml-4 text-2xl sm:text-xl md:text-2xl">JOBBY</span>
      <img
        src={bg === true ? night : light}
        alt='toggle-light-dark'
        onClick={handleBg}
        className="w-10 ml-4 mr-8 border-2 border-white rounded-xl p-1 hover:cursor-pointer"
        style={{ flexShrink: 0 }}
      />
    </div>
  );
};



export default Navbar;
