import React from "react";
import PropTypes from "prop-types";
import "./ImagesStyle.css";

function Images({ url, title }) {
  return (
    <div className="imgHolder">
      <img className="picture" src={url} alt={title} />
    </div>
  );
}

Images.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,

};

export default Images;
