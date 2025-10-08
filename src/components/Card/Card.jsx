import React from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png";

const Card = ({ singleCard }) => {
  return (
    <div className="p-4 bg-white max-w-[350px] rounded-[4px] flex flex-col justify-between">
      <img
        src={singleCard.image}
        alt={singleCard.title}
        className="w-full max-h-[316px] mb-2 rounded-[8px]"
      />
      <h3 className="font-medium text-[20px]">{singleCard.title}</h3>

      <div className="flex items-center justify-between">
        <div className="bg-[#F1F5E8] flex items-center px-[10px] py-[6px] gap-2 rounded-[4px]">
          <img className="w-[20px]" src={downloadIcon} alt="download icon" />
          <p className="font-medium">{singleCard.downloads}</p>
        </div>

        <div className="bg-[#FFF0E1] flex items-center px-[10px] py-[6px] gap-2 rounded-[4px]">
          <img className="w-[20px]" src={ratings} alt="ratings icon" />
          <p className="font-medium">{singleCard.ratingAvg}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
