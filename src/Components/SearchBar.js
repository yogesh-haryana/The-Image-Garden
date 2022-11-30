import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./SearchBarStyles.css";

library.add(faMagnifyingGlass);

function SearchBar() {
  const [keyword, setKeyword] = useState("");

  const updateSearch = (e) => {
    setKeyword(e.target.value);
  };

  const navigate = useNavigate();
  const searchHandler = (e, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    const url = `/search/${searchInput}`;
    navigate(url);
  };

  return (
    <div>
      <form
        onSubmit={(e) => searchHandler(e, navigate)}
        className="searchForm"
      >
        <input
          onChange={updateSearch}
          value={keyword}
          className="searchbar"
        />
        <button
          type="submit"
          className="searchButton"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
