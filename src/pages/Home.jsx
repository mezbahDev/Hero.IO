import React, { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Cards from "../components/Cards/Cards";
import Card from "../components/Card/Card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [allCards, setAllCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllCards(data))
      .catch((err) => console.log("Error Loading Data: ", err));
  }, []);

  const handleAll = () => {
    navigate("/apps");
  };

  return (
    <div className="bg-[#e9e9e9]">
      <Hero />
      <Cards data={allCards} />
      {allCards.length > 0 ? null : (
        <div className="flex flex-col items-center pb-[100px] gap-4">
          <p className="text-black text-xl font-medium">No Apps Found</p>
          <button
            onClick={handleAll}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
          >
            Show All Apps
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
