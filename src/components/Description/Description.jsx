import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Description = ({ data }) => {
  const { id } = useParams();
  const [appDescription, setAppDescription] = useState("");

  useEffect(() => {
    if (data && data.length > 0) {

      const currentApp = data.find((app) => app.id === parseInt(id));
      if (currentApp) {
        setAppDescription(currentApp.description);
      }
    }
  }, [id, data]);

  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  if (!appDescription) {
    return (
      <div className="text-center mt-20 text-gray-500 text-xl">
        Description not found
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-[24px] font-semibold text-[#001931] mt-[80px]">
        Description
      </h2>
      <p className="mt-[20px] text-[20px] text-[#627382]">{appDescription}</p>
    </div>
  );
};

export default Description;
