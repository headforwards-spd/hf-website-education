import { bool, string } from "prop-types";
import React from "react";

import "./postit.scss";

export default Postit;

Postit.propTypes = {
  image: string,
  alt: string,
  isRightImage: bool,
  className: string,
};
Postit.defaultProps = {
  image: null,
  isRightImage: false,
  alt: null,
  className: "",
};

function Postit({ image, alt, isRightImage, className }) {
  const imageClass = isRightImage === true ? isRightImage : "";
  const versionStyle = [`v7`];

  return (
    <div className={`postit ${versionStyle} ${imageClass} ${className}`}>
      <img src={image} alt={alt} ratio="100%" />
    </div>
  );
}
