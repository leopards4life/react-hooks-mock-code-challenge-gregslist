import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings }) {

//   function handleDeleteListing(id) {
//     fetch(`http://localhost:6001/listings/${id}`, {
//       method: "DELETE",
//     })
//     .then(res => res.json())
//     .then(() => {
//     const updatedListings = listings.filter(listing => listing.id !== id);
//     setListings(updatedListings);
//   })
// }

const listItems = listings.map(listing => (
  <ListingCard 
  listing={listing}
  key={listing.id}
  description={listing.description}
  image={listing.image}
  location={listing.location}
  // onDeleteListing={handleDeleteListing}
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
