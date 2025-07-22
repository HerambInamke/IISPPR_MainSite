import React from 'react';
import researchData from '../data/researchData';
import ResearchCard from '../components/ResearchCard';

const Research = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* Hero Section */}
      <section className="bg-[#0B1C28] text-white py-20 px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Research</h1>
        <p className="max-w-3xl text-lg text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum sem quis eros posuere, vitae tempor tellus porta.
        </p>
      </section>

      {/* Articles Grid */}
      <section className="px-6 md:px-12 py-12 bg-white flex-grow">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Articles</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Articles"
              className="border border-gray-300 rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {researchData.map((item) => (
            <ResearchCard
              key={item.id}
              tag={item.tag}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Research;
