import React, { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Cards from "../components/Cards/Cards";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [allCards, setAllCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllCards(data))
      .catch((err) => console.log("Error Loading Data: ", err))
      .finally(() => setLoading(false));
  }, []);

  const handleAll = () => {
    navigate("/apps");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#e9e9e9]">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="bg-[#e9e9e9]">
      <Hero />
      <Cards data={allCards} />
      {allCards.length === 0 && (
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
