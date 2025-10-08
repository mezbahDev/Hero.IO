import React from "react";
import Card from "../Card/Card";

const Cards = ({ data }) => {
  if (!data || data.length === 0) return <p>Thinking...</p>;

  return (
    <div className="flex flex-col items-center p-[80px] gap-[40px]">
      <div className="text-black flex flex-col items-center gap-4">
        <h1 className="text-[48px] font-bold">Trending Apps</h1>
        <p className="text-[20px] text-[#627382]">
          Explore All Trending Apps on the Market Developed by Us
        </p>
      </div>

      <div className="text-black grid grid-cols-3 gap-6">
        {data.map((singleCard) => (
          <Card key={singleCard.id} singleCard={singleCard} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
