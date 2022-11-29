import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ImageContext } from './ApiCall';
import ImageCollection from './ImageCollection';

function Picture({ query }) {
  const { data, getRemoteData } = useContext(ImageContext);
  useEffect(() => {
    getRemoteData(query);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  return (
    <div>
      <ImageCollection imageData={data} />
    </div>
  );
}

Picture.propTypes = {
  query: PropTypes.string.isRequired,
};

export default Picture;
