import React from "react";
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          height: "calc(100vh - 51px)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 className="text-danger bg-warning p-4 rounded">Page not found</h1>
      </div>
    </>
  );
};

export default NotFound;
