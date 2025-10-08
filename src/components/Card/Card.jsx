import React from "react";
import { useNavigate } from "react-router-dom";
import downloadIcon from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png";

const Card = ({ singleCard, onInstall }) => {
  const navigate = useNavigate();

  const handleDivClick = () => {
    navigate(`/app/${singleCard.id}`);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    if (onInstall) onInstall(singleCard);
  };

  return (
    <div
      onClick={handleDivClick}
      className="p-4 bg-white rounded shadow hover:-translate-y-3 transform transition duration-300 cursor-pointer"
    >
      <img
        src={singleCard.image}
        alt={singleCard.title}
        className="w-full h-64 object-cover rounded mb-2"
      />
      <h3 className="font-medium text-lg">{singleCard.title}</h3>

      <div className="flex justify-between mt-2">
        <div className="flex items-center gap-2">
          <img src={downloadIcon} alt="downloads" className="w-5" />
          <p>{singleCard.downloads}</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={ratings} alt="ratings" className="w-5" />
          <p>{singleCard.ratingAvg}</p>
        </div>
      </div>

      <button
        onClick={handleButtonClick}
        className="mt-4 w-full py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded transform transition hover:scale-110"
      >
        Install
      </button>
    </div>
  );
};

export default Card;
