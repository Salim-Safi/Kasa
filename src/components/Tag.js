import React from "react";
import "../styles/tag.css";

const Tag = ({ tag }) => {
  return (
    <div className="tag">
      <p>{tag}</p>
    </div>
  );
};

export default Tag;
