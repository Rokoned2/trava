import React from "react";

const Card = ({
  id,
  title,
  price,
  classPicture,
  headingStyle,
  details,
  footerStyle,
}) => {
  return (
    <div className="card" key={id}>
      <div className="card__side card__side--front">
        <div className={`card__picture ${classPicture}`}>&nbsp;</div>
        <h4 className="card__heading">
          <span className={`card__heading-span ${headingStyle}`}>{title}</span>
        </h4>
        <div className="card__details">
          <ul>
            {details.map((detail) => (
              <li>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`card__side card__side--back ${footerStyle}`}>
        <div className="card__cta">
          <div className="card__price-box">
            <p className="card__price-only">A solo</p>
            <p className="card__price-value">${price}</p>
          </div>
          <a href="#popup" className="btn btn--white">
            Agendar ahora
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
