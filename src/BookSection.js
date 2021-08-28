import React from "react";

const BookSection = () => {
  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">Agendar ahora!</h2>
              </div>

              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Nombre completo"
                  id="name"
                  required
                />
                <label for="name" className="form__label">
                  Nombre completo
                </label>
              </div>

              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Correo electrónico"
                  id="email"
                  required
                />
                <label for="email" className="form__label"></label>
              </div>

              <div className="form__group u-margin-bottom-medium">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="small"
                    name="size"
                  />
                  <label for="small" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Grupo de turístas pequeño
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="large"
                    name="size"
                  />
                  <label for="large" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Grupo de turístas grande
                  </label>
                </div>
              </div>

              <div className="form__group">
                <button className="btn btn--green">Enviar &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
