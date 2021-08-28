import React from "react";
import Nat8 from "../img/nat-8.jpg";
import Nat9 from "../img/nat-9.jpg";
import Story from "./Story";

const stories = [
  {
    id: "1",
    image: Nat8,
    name: "Mary Smith",
    title: "Fue la mejor semana que he tenido con mi familia",
    description: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          ipsum sapiente aspernatur libero repellat quis consequatur ducimus
          quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
          aspernatur libero repellat quis consequatur ducimus quam nisi
          exercitationem omnis earum qui.
    `,
  },
  {
    id: "2",
    image: Nat9,
    name: "Jack Wilson",
    title: "Una experiencia que cambió mi vida",
    description: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          ipsum sapiente aspernatur libero repellat quis consequatur ducimus
          quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
          aspernatur libero repellat quis consequatur ducimus quam nisi
          exercitationem omnis earum qui.
    `,
  },
];

const StoriesSection = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="../img/video.mp4" type="video/mp4" />
          <source src="../img/video.webm" type="video/webm" />
          Your browser is not supported!
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Hacemos felices a las personas</h2>
      </div>

      {stories.map(({ id, image, name, title, description }) => (
        <div className="row" key={id}>
          <Story
            id={id}
            image={image}
            name={name}
            title={title}
            description={description}
          />
        </div>
      ))}

      <div className="u-center-text u-margin-top-huge">
        <a href="/" className="btn-text">
          Leer más testimonios &rarr;
        </a>
      </div>
    </section>
  );
};

export default StoriesSection;
