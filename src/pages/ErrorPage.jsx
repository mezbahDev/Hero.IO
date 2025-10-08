import React from "react";
import { useRouteError } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <Navbar>
        <div>{error.message}</div>
      </Navbar>
    </div>
  );
};

export default ErrorPage;
