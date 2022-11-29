import React from 'react';
import Items from './Items';
import SearchBar from './SearchBar';

function Header() {
  return (
    <div>
      <h1 className="mainheading">The Image Garden</h1>
      <SearchBar />
      <Items />
    </div>
  );
}

export default Header;
