import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
const [listings, setListings] = useState([]);
const [search, setSearch] = useState("");

useEffect(() => {
  fetch("http://localhost:6001/listings")
  .then(res => res.json())
  .then(listings => setListings(listings))
}, [])

function handleDeleteListing(id) {
  fetch(`http://localhost:6001/listings/${id}`, {
    method: "DELETE",
  })
  .then(res => res.json())
  .then(() => {
  const updatedListings = listings.filter(listing => listing.id !== id);
  setListings(updatedListings);
})
}
const displayedListings = listings.filter(listing => 
  listing.description.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="app">
      <Header 
      onSearch={setSearch}
      search={search}/>
      <ListingsContainer 
      listings={displayedListings}
      onDeleteListing={handleDeleteListing}
      />
    </div>
  );
}

export default App;
