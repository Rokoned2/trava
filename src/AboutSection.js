import React from "react";
import Photo1 from "./img/nat-1.jpg";
import Photo2 from "./img/nat-2.jpg";
import Photo3 from "./img/nat-3.jpg";
import Photo1L from "./img/nat-1-large.jpg";
import Photo2L from "./img/nat-2-large.jpg";
import Photo3L from "./img/nat-3-large.jpg";

const AboutSection = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Tours emocionantes para personas aventureras{" "}
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Vas a enamorarte de la naturaleza
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Vive aventuras como nunca ántes
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nulla deserunt voluptatum nam.
          </p>

          <a href="/" className="btn-text">
            Ver más &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              srcSet={`${Photo1} 300w, ${Photo1L} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo1"
              className="composition__photo composition__photo--p1"
              src="img/nat-1-large.jpg"
            />

            <img
              srcSet={`${Photo2} 300w, ${Photo2L} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo2"
              className="composition__photo composition__photo--p2"
              src="img/nat-2-large.jpg"
            />

            <img
              srcSet={`${Photo3} 300w, ${Photo3L} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo3"
              className="composition__photo composition__photo--p3"
              src="img/nat-3-large.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
