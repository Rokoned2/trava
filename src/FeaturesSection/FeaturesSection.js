import React from "react";
import FeatureBox from "./FeatureBox";

const features = [
  {
    id: "1",
    title: "Explora el mundo",
    description: `
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur.
            `,
  },

  {
    id: "2",
    title: "Conoce la naturaleza",
    description: `
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur.
            `,
  },

  {
    id: "3",
    title: "Encuentra tu camino",
    description: `
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur.
            `,
  },

  {
    id: "4",
    title: "Vive una vida sana",
    description: `
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur.
            `,
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-features" id="section-features">
      <div className="row">
        {features.map(({ id, title, description }) => (
          <div className="col-1-of-4" key={id}>
            <FeatureBox id={id} title={title} description={description} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
