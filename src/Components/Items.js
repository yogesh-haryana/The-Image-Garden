import React from "react";
import { NavLink } from "react-router-dom";
import useStyle from "./ItemStyles";

function Items() {
  const classes = useStyle();
  return (
    <div className={classes.itemsContainer}>
      <ul className={classes.ul} type="none">
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
