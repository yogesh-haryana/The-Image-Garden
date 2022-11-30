import React from "react";
import PropTypes from "prop-types";
import Images from "./Images";
import "./ImageColStyles.css";

function ImageCollection(props) {
  const { imageData } = props;
  const images = imageData.map((image) => {
    const { farm } = image;
    const { server } = image;
    const { secret } = image;
    const { title } = image;
    const { id } = image;
    const imgurl = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
    return <Images url={imgurl} alt={title} key={id} />;
  });

  return (
    <div className="imgCollection">
      {images}
    </div>
  );
}

ImageCollection.propTypes = {
  imageData: PropTypes.arrayOf.isRequired,
};

export default ImageCollection;
