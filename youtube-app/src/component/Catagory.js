import { AppBar, Box, Button } from "@mui/material";
import React from "react";
import "../Styling/Catagory.css";
import { categorydata } from "../data/categorydata";

const Catagory = () => {
  return (
    <>
      <div className="category">
        {categorydata.map((item)=> 
          <div className="item">{item}</div>
        )}
      </div>
    </>
  );
};

export default Catagory;
