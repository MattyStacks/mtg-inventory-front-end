import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';


function Inventory() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('./inventory.json')
      .then(response => response.json())
      .then(data => setCards(data.cards));
  }, []);

  return (
    <div className="inventory">
    <p>Testing output</p>
      {cards.map(card => (
        <Card
          key={card.id}
          name={card.name}
          image={card.image}
          type={card.type}
          cost={card.cost}
          rarity={card.rarity}
          set={card.set}
        />
      ))}
    </div>
  );
}

export default Inventory;