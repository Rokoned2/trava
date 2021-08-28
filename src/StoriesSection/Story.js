import React from "react";

const Story = ({ id, image, name, title, description }) => {
  return (
    <div className="story" key={id}>
      <figure className="story__shape">
        <img src={image} alt="Person on a tour" className="story__img" />
        <figcaption className="story__caption">{name}</figcaption>
      </figure>
      <div className="story__text">
        <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Story;
