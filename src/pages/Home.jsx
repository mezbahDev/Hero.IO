import React, { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Cards from "../components/Cards/Cards";


const Home = () => {
  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllCards(data))
      .catch((err) => console.log("Error Loading Data: ", err));
  }, []);

  return (
    <div className="bg-[#e9e9e9]">
      <Hero />
      <Cards data={allCards} />
    </div>
  );
};

export default Home;
