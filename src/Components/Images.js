import React from 'react';
import PropTypes from 'prop-types';
import useStyle from './ImagesStyle';

function Images({ url, title }) {
  const classes = useStyle();

  return (
    <div className={classes.imgHolder}>
      <img className={classes.picture} src={url} alt={title} />
    </div>
  );
}

Images.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,

};

export default Images;
