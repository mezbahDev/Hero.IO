import React from "react";

const Card = ({ singleCard }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <img
        src={singleCard.image}
        alt={singleCard.title}
        className="w-full h-40 object-cover mb-2"
      />
      <h3 className="font-bold text-lg">{singleCard.title}</h3>
      <p className="text-gray-500">{singleCard.companyName}</p>
      <p className="mt-2">{singleCard.description}</p>
    </div>
  );
};

export default Card;
