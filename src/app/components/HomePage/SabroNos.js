import React from "react";

const SabroNos = () => {
  return (
    <section
      className="container-fluid  pl-3 py-3 py-md-5 mt-3 mt-md-5"
      style={{ background: "#f5f5f5" }}
    >
      <div className="container mt-2">
        <div className="row">
          <div className="col-12 col-sm-6 d-flex flex-column justify-content-end align-items-start">
            <h1 className="display-1 pl-0">Sobre nós</h1>
            <div>
              A água límpida dos trechos não poluídos do Mondego e do Alva,
              correndo em curvas caprichosas entre montes escarpados que
              oferecem, a quem nos visita a tranquilidade e harmonia de uma
              paisagem única. Ao longo dos rios e na grandiosa Albufeira da
              Barragem da Aguieira existe um cenário perfeito para a prática da
              Pesca.
            </div>

            <button className="btn btn-success mt-4 btn-sm font-weight-bold">
              Ver os nossos eventos
            </button>
          </div>
          <div className="col-12 col-sm-6">
            <img
              src="media/Group-539.svg"
              className="w-100"
              style={{ height: "300px" }}
              alt="Group-539"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SabroNos;
