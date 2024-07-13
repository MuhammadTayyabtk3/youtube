import React, { useState } from "react";
import Cards from "./Cards";
import { Carddata } from "../data/Carddata";
import '../Styling/card.css';

const CardContainer = () => {
  const [cards, setCards] = useState(Carddata);

  const handleEditCard = (key, updatedCard) => {
    setCards(cards.map(card => card.key === key ? { ...card, ...updatedCard } : card));
  };

  const handleDeleteCard = (key) => {
    setCards(cards.filter(card => card.key !== key));
  };

  return (
    <div className="cards">
      {cards.map((card) => (
        <Cards
          key={card.key}
          uniquekey={card.key}
          avatar={card.avatar}
          image={card.image}
          title={card.title}
          authorname={card.authorname}
          timestamp={card.timestamp}
          view={card.view}
          onEditCard={handleEditCard}
          onDeleteCard={handleDeleteCard}
        />
      ))}
    </div>
  );
};

export default CardContainer;
