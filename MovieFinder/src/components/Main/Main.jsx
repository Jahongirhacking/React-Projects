import React from "react";
import Cards from "./Cards/Cards";
import "./Main.css";

const Main = ({ data }) => {
  return (
    <main className="main">
      {(data &&
        data.map((el) => {
          return <Cards key={el.imdbID} data={el} />;
        })) || (
        <div>
          Nothing Found
          <i className="fa-solid fa-face-frown"></i>
        </div>
      )}
    </main>
  );
};

export default Main;
