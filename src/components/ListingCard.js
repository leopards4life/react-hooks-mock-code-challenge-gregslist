import React, { useState } from "react";

function ListingCard({ location, image, description, listing, onDeleteListing }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = listing;

  function handleClick() {
    setIsFavorite(!isFavorite)
  }

  function handleDeleteListing() {
    onDeleteListing(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button 
        onClick={handleDeleteListing}
        className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
