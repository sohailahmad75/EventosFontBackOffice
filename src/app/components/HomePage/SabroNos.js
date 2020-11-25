import React from "react";

const SabroNos = () => {
  return (
    <section
      className="container-fluid pl-3 py-3 py-md-5 mt-3 mt-md-5">
      <div className="row">
        <div className="col-12 col-md-5 offset-0 offset-md-3 mt-5">
          <h1 className="display-1 pl-0 pl-md-5">Sobre nós</h1>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-md-3 text-left text-md-center mb-2 mb-md-0  text-uppercase">
         <p className='heading-with-line-gray'>Quem somos</p>
        </div>
        <div className="col-12 col-md-6 ">
          <div className="container-fluid">
            <div className="row">

              <div className="col-12">
                A água límpida dos trechos não poluídos do Mondego e do Alva, correndo em curvas caprichosas entre montes escarpados que oferecem, a quem nos visita a tranquilidade e harmonia de uma paisagem única. Ao longo dos rios e na grandiosa Albufeira da Barragem da Aguieira existe um cenário perfeito para a prática da Pesca.
            </div>
              <button className='btn btn-primary m-4 btn-sm font-weight-bold'>Ver os nossos eventos</button>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SabroNos;
