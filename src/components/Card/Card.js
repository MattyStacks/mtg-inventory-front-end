import React from 'react';

function Card({ name, image, type, cost, rarity, set }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-info">
        <h2 className="card-name">{name}</h2>
        <p className="card-type">{type}</p>
        <p className="card-cost">{cost}</p>
        <p className="card-rarity">{rarity}</p>
        <p className="card-set">{set}</p>
      </div>
    </div>
  );
}

export default Card;