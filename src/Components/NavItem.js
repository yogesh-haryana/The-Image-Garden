import React from "react";
import PropTypes from "prop-types";
import Picture from "./Picture";
import "./NavItemStyles.css";

function NavItem({ query }) {
  return (
    <div>
      <h2 className="heading">
        {query}
        {" "}
        images
        {" "}

      </h2>
      <Picture query={query} />
    </div>
  );
}

NavItem.propTypes = {
  query: PropTypes.string.isRequired,

};

export default NavItem;
