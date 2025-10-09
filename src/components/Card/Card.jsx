import React from "react";
import { useNavigate } from "react-router-dom";
import downloadIcon from "../../../public/assets/icon-downloads.png";
import ratings from "../../../public/assets/icon-ratings.png";

const Card = ({ singleCard }) => {
  const navigate = useNavigate();

  const handleDivClick = () => {
    navigate(`/app/${singleCard.id}`);
  };

  return (
    <div
      onClick={handleDivClick}
      className="p-4 bg-white rounded-xl shadow hover:-translate-y-2 transform transition duration-300 cursor-pointer 
                 flex flex-col justify-between h-[420px]"
    >
      <img
        src={singleCard.image}
        alt={singleCard.title}
        className="w-full h-60 object-cover rounded-md mb-3"
      />

      <h3 className="font-semibold text-lg leading-tight line-clamp-2 text-[#001931]">
        {singleCard.title}
      </h3>

      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-2 text-[#627382] bg-[#F1F5E8] p-2">
          <img src={downloadIcon} alt="downloads" className="w-5 h-5" />
          <p className="text-[#00D390]">{singleCard.downloads}</p>
        </div>
        <div className="flex items-center gap-2 text-[#627382] bg-[#FFF0E1] p-2">
          <img src={ratings} alt="ratings" className="w-5 h-5" />
          <p className="text-[#FF8811]">{singleCard.ratingAvg}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
