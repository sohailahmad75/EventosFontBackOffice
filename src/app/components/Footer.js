import React from 'react';

const Footer = () => {
  return (
    <div className='container-fluid  footer-container small' style={{backgroundColor: '#000', color: '#fff'}}>
      <div className="row p-2 p-md-5">
        <div className="col-12 col-md-9 col-xl-6">
          <div className="row">
            <div className="col-12 col-md-4">
              <div>Mapa do site</div>
              <div>Eventos</div>
              <div>Sobre</div>
              <div>O meu perfil</div>
            </div>
            <div className="col-12 col-md-4">
              <div>
                Informações
              </div>
              <div><img src="media/http_icon.png" alt="Http Icon"/><span className='ml-3'>cm-penacova.pt</span></div>
              <div><img src="media/mail_icon.png" alt="Mail Icon"/><span className='ml-3'>geral@cm-penacova.pt</span></div>
              <div><img src="media/location_icon.png" alt="Location Icon"/><span className='ml-3'>Largo Alberto Leitão, 5 3360-341 Penacova</span></div>
            </div>
            <div className="col-12 col-md-4">
              <div><img src="media/phone_icon.png" alt="Fax Icon"/><span className='ml-3'>239 470 300</span></div>
              <div><img src="media/fax_icon.png" alt="Fax Icon"/><span className='ml-3'>239 478 098</span></div>
              <div><img src="media/clock_icon.png" alt="Clock Icon"/><span className='ml-3'>Dias úteis: 09h - 17h</span></div>
            </div>
          </div>

        </div>
        <div className="col-12 col-md-3">
          <div className="row align-items-end justify-content-end h-100">
            <img src="media/portugal_logo.png" alt="portugal logo"/>
          </div>
        </div>
      </div>
      <div className="row p-2 p-md-5">
        <div className="col-12 col-md-9 col-xl-6">
        <div className="row mt-2 mt-md-5">
        <div className="col-12 col-md-6">
          <div>
            POWERED BY
          </div>
          <div>
            <img src="media/radical_logo.png" alt="Radical Logo"/>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-3 mt-md-0 d-flex">
          <p className='text-muted m-0 ' style={{alignSelf: 'flex-end'}}>© 2020 <span style={{color: 'white'}}>CM Penacova.</span>  All Rights Reserved.</p>
        </div>
        </div> </div>
      </div>
    </div>
  );
};

export default Footer;
