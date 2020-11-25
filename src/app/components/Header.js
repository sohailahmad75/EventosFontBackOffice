import React from 'react';

const Header = () => {
  return (
    <div className='header-sec'>
      <section className='container'>
        <div className='header-tabs row d-flex justify-content-between' >
          <div className="col-12 col-md-7 col-lg-8">
            Eventos desportivos de Penacova
          </div>
          <div className="d-flex col-12 col-md-5 col-lg-4 justify-content-between">
            <span>
              Eventos
            </span>
            <span>
              Sobre
            </span>
            <div className='vertical-line'></div>
            <span>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </span>
            <span>
              Iniciar sessão
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
