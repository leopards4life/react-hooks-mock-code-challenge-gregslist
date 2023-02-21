import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([]);

    useEffect(() => {
      fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(listings => setListings(listings))
    }, [])

    const listItems = listings.map(listing => (
      <ListingCard 
      key={listing.id}
      description={listing.description}
      image={listing.image}
      location={listing.location}
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
