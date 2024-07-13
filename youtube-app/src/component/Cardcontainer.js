import React from "react";
import Cards from "./Cards";
import { Carddata } from "../data/Carddata";
import '../Styling/card.css'

const Cardcontainer = () => {
  return (
    <div className="cards">
      {Carddata.map((items) => (
        <div>
        <Cards
          image={items.image}
          title={items.title}
          authorname={items.authorname}
          timestamp={items.timestamp}
          view={items.view}
          avatar={items.avatar}
        />
        </div>
      ))}
    </div>
  );
};

export default Cardcontainer;
