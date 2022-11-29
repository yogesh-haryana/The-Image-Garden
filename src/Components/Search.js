import React from "react";
import { useParams } from "react-router-dom";
import Picture from "./Picture";

function Search() {
  const { Input } = useParams();
  console.log(Input);
  return (
    <div>
      <h2>
        {Input}
        images
      </h2>
      <Picture query={Input} />
    </div>
  );
}

export default Search;
