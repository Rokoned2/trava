import React from "react";
import Card from "./Card";

const tours = [
  {
    id: "1",
    title: "Explorador de mares",
    price: "297",
    classPicture: "card__picture--1",
    headingStyle: "card__heading-span--1",
    footerStyle: "card__side--back-1",
    details: [
      "Tour de 3 días",
      "Más de 30 personas",
      "2 guías turísticos",
      "Estadía en hoteles cómodos",
      "Dificultad: fácil",
    ],
  },
  {
    id: "2",
    title: "Excursionista de bosques",
    price: "497",
    classPicture: "card__picture--2",
    headingStyle: "card__heading-span--2",
    footerStyle: "card__side--back-2",
    details: [
      "Tour de 7 días",
      "Más de 40 personas",
      "6 guías turísticos",
      "Carpas proveídas para dormir",
      "Dificultad: media",
    ],
  },
  {
    id: "3",
    title: "Aventurero de nieve",
    price: "897",
    classPicture: "card__picture--3",
    headingStyle: "card__heading-span--3",
    footerStyle: "card__side--back-3",
    details: [
      "Tour de 5 días",
      "Más de 15 personas",
      "3 guías turísticos",
      "Carpas proveídas para dormir",
      "Dificultad: difícil",
    ],
  },
];

const ToursSection = () => {
  return (
    <section className="section-tours" id="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Tours más populares</h2>
      </div>

      <div className="row">
        {tours.map(
          ({
            id,
            title,
            price,
            classPicture,
            details,
            footerStyle,
            headingStyle,
          }) => (
            <div className="col-1-of-3" key={id}>
              <Card
                id={id}
                title={title}
                price={price}
                classPicture={classPicture}
                details={details}
                footerStyle={footerStyle}
                headingStyle={headingStyle}
              />
            </div>
          )
        )}
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="/" className="btn btn--green">
          Ver más tours
        </a>
      </div>
    </section>
  );
};

export default ToursSection;
