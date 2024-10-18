import React from 'react';

const Polaroid = ({ imageSrc, caption }) => {
  return (
    <div className="w-60 p-4 bg-white shadow-lg rounded-md transform hover:rotate-1 transition-transform duration-300">
      <img src={imageSrc} alt={caption} className="w-full h-64 object-cover" />
      <div className="text-center mt-2 text-lg font-semibold">{caption}</div>
    </div>
  );
};

export default Polaroid;
