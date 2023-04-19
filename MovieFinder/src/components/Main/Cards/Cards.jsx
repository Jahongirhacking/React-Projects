import React from "react";
import "./Cards.css";

const Cards = ({ data }) => {
  const defaultImage = "https://picsum.photos/200/300";
  return (
    <div className="card">
      <img
        src={data.Poster !== "N/A" ? data.Poster : defaultImage}
        alt={data.Title}
      />
      <div className="description">
        <p>{data.Type}</p>
        <p>{data.Title}</p>
      </div>
    </div>
  );
};

export default Cards;
