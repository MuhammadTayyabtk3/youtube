import React from "react";
import { categorydata } from "../data/categorydata";
import "../Styling/Catagory.css";

const Catagory = () => {
  return (
    <div className="category">
      {categorydata.map((item, index) => (
        <div className="item" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Catagory;
