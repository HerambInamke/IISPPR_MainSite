import React from 'react';

const ResearchCard = ({ tag, title, description }) => {
  return (
    <div className="bg-white border rounded-lg shadow hover:shadow-lg transition duration-300">
      <div className="h-40 bg-gray-200 rounded-t-md"></div>
      <div className="p-4">
        <p className="text-sm text-red-500 font-medium">{tag}</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <button className="mt-4 px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-black rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ResearchCard;
