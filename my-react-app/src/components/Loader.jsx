import React from "react";

const Loader = () => {
  return (
    <div
      style={{ height: "calc(100vh - 50px)" }}
      className="d-flex align-items-center justify-content-center"
    >
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
