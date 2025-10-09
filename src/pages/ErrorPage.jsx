import React from "react";
import { useNavigate } from "react-router-dom";
import errorImg from "../../public/assets/error-404.png";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-[#f1f1f1] flex flex-col">
      <div className="flex flex-col items-center justify-center flex-1 p-8">
        <img
          src={errorImg}
          alt="404 error"
          className="w-80 h-80 mb-8 object-contain"
        />
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Oops, page not found!
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            The page you are looking for is not available
          </p>
          <button
            onClick={handleGoHome}
            className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:scale-105 transform transition duration-300 shadow-lg"
          >
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
