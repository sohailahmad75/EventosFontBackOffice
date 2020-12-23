import React from "react";
import HttpIcon from "./svgs/HttpIcon";
import EmailIcon from "./svgs/EmailIcon";
import LocationIcon from "./svgs/LocationIcon";
import PhoneIcon from "./svgs/PhoneIcon";
import PrintIcon from "./svgs/PrintIcon";
import ClockIcon from "./svgs/ClockIcon";

const Footer = () => {
  return (
    <div className="container  footer-container small py-5">
      <div className="row pb-5">
        <div className="col-12 col-md-2">
          <div>Mapa do site</div>
          <div>Eventos</div>
          <div>Sobre</div>
          <div>O meu perfil</div>
        </div>
        <div className="col-12 col-md-3">
          <div>Informações</div>
          <div className="d-flex align-items-start">
            <div style={{ width: 24 }} className="mr-3">
              <HttpIcon />
            </div>

            <span>cm-penacova.pt</span>
          </div>
          <div className="d-flex align-items-start">
            <div style={{ width: 24 }} className="mr-3">
              <EmailIcon />
            </div>
            <span>geral@cm-penacova.pt</span>
          </div>
          <div className="d-flex align-items-start">
            <div style={{ width: 24 }} className="mr-3">
              <LocationIcon />
            </div>
            <span>Largo Alberto Leitão, 5 3360-341 Penacova</span>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="d-flex align-items-start invisible">
            <div style={{ width: 24 }} className="mr-3">
              <PhoneIcon />
            </div>
            <span>239 470 300</span>
          </div>
          <div className="d-flex align-items-start">
            <div style={{ width: 24 }} className="mr-3">
              <PhoneIcon />
            </div>
            <span>239 470 300</span>
          </div>
          <div className="d-flex align-items-start">
            <div style={{ width: 24 }} className="mr-3">
              <PrintIcon />
            </div>
            <span>239 478 098</span>
          </div>
          <div className="d-flex align-items-start">
            <div style={{ width: 24 }} className="mr-3">
              <ClockIcon />
            </div>
            <span>Dias úteis: 09h - 17h</span>
          </div>
        </div>
      </div>

      <p>© {new Date().getFullYear()} CM Penacova All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
