import React from "react";

const Loading = ({ content }) => {
  return (
    <div className="text-center my-5">
      <h2 className="loading">Loading {content}...</h2>
    </div>
  );
};

export default Loading;
