import React, { useState, createContext, useMemo } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import apiKey from "./Apikey";

export const ImageContext = createContext();
function ApiCall({ children }) {
  const [data, setData] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getRemoteData = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then((response) => { setData(response.data.photos.photo); });
  };

  const ContextWrapperValue = useMemo(() => ({ data, getRemoteData }), [data, getRemoteData]);

  return (
    <ImageContext.Provider value={ContextWrapperValue}>{children}</ImageContext.Provider>
  );
}

ApiCall.propTypes = {
  children: PropTypes.arrayOf.isRequired,
};

export default ApiCall;
