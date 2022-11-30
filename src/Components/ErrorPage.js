import React from "react";
import Error from "../assests/Error.png";

function ErrorPage() {
  return (
    <div className="errorHeading">
      <img src={Error} alt="ErrorImage" height="35%" width="35%" />
      <h2>  There is some error while loading the images.</h2>
    </div>
  );
}

export default ErrorPage;
