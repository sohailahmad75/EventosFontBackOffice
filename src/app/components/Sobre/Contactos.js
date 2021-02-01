import React from "react";
import ContactosForm from "./ContactosForm";
const Contactos = () => {
  return (
    <section className="container-fluid pl-0 pl-3 mt-3 mt-md-5 contactos-sec">
      <div className="row ">
        <div className="col-12 col-md-10 offset-0 offset-md-2 mt-5 proximos-main-container ">
          <div className="container-fluid ">
            <div className="row _inner-container">
              <div className="col-12 col-md-4 d-none d-md-block">
                <img
                  src="media/Group-647.png"
                  width="100%"
                  height="100%"
                  alt="imhgg"
                />
              </div>
              <div className="col-12 col-md-8">
                <div className="proximos-main__title">
                  <h1 className="display-1 col-9">Contactos</h1>
                  <div className="_underline_heading mt-3 pb-1 mb-3 pl-2 font-weight-bold">
                    Câmara Municipal de Penacova
                  </div>
                  <div className="contactosform">
                    <ContactosForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactos;
