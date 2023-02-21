import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteListing }) {

const listItems = listings.map(listing => (
  <ListingCard 
  listing={listing}
  key={listing.id}
  description={listing.description}
  image={listing.image}
  location={listing.location}
  onDeleteListing={onDeleteListing}
  />
));

  return (
    <main>
      <ul className="cards">
        {listItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
