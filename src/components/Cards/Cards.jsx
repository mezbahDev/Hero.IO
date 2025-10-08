import React, { useState } from "react";
import { useNavigate } from "react-router";
import Card from "../Card/Card";

const Cards = ({ data }) => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  if (!data || data.length === 0) return <p>Thinking...</p>;

  // 8 card show by default
  const visibleCards = showAll ? data : data.slice(0, 8);

  // Button press korle apps page e niye jabe
  const handleAll = () => {
    navigate("/apps");
  };

  return (
    <div className="flex flex-col items-center p-[80px] gap-[40px]">
      <div className="text-black flex flex-col items-center gap-4">
        <h1 className="text-[48px] font-bold">Trending Apps</h1>
        <p className="text-[20px] text-[#627382]">
          Explore All Trending Apps on the Market Developed by Us
        </p>
      </div>

      <div className="text-black grid grid-cols-4 gap-6">
        {visibleCards.map((singleCard) => (
          <Card key={singleCard.id} singleCard={singleCard} />
        ))}
      </div>

      {/* show all button */}
      {!showAll && data.length > 8 && (
        <button
          onClick={handleAll}
          className="cursor-pointer mt-10 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
        >
          Show All
        </button>
      )}
    </div>
  );
};

export default Cards;
