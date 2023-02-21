import React from "react";
import Search from "./Search";

function Header({ onSearch, search }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
      onSearch={onSearch}
      search={search}/>
    </header>
  );
}

export default Header;
