import React from "react";

const FeatureBox = ({ id, title, description }) => {
  return (
    <div className="feature-box" key={id}>
      <i className="feature-box__icon icon-basic-world"></i>
      <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
      <p className="feature-box__text">{description}</p>
    </div>
  );
};

export default FeatureBox;
