import React from "react";
import { NavLink } from "react-router-dom";
import "./ItemStyles.css";

function Items() {
  return (
    <div className="itemsContainer">
      <ul className="ul" type="none">
        <li>
          <NavLink to="/mountain">Mountain</NavLink>
        </li>
        <li>
          <NavLink to="/beaches">Beaches</NavLink>

        </li>
        <li>
          <NavLink to="/birds">Birds</NavLink>

        </li>
        <li>
          <NavLink to="/food">Food</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Items;
