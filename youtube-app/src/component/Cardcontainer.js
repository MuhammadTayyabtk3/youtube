import React, { useState } from "react";
import Cards from "./Cards";
import { Carddata } from "../data/Carddata";
import '../Styling/card.css'

const Cardcontainer = () => {
  const [cards, setCards] = useState(Carddata);

  const handleEditCard = (key, newTitle) => {
    setCards(cards.map(card => card.key === key ? { ...card, title: newTitle } : card));
  };

  const handleDeleteCard = (key) => {
    setCards(cards.filter(card => card.key !== key));
  };
  return (
    <div className="cards">
      {cards.map((items) => (
        <div>
        <Cards
          image={items.image}
          title={items.title}
          authorname={items.authorname}
          timestamp={items.timestamp}
          view={items.view}
          avatar={items.avatar}
          uniquekey={items.key}
          onEditCard={handleEditCard} 
        onDeleteCard={handleDeleteCard} 
        />
        </div>
      ))}
    </div>
  );
};

export default Cardcontainer;
