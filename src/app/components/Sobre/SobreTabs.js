import React from "react";

const SobreTabs = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="container py-4">
        <div
          className="d-flex align-items-center text-dark"
          style={{ fontSize: 14 }}
        >
          <div className="mr-3">Quem somos</div>
          <div className="ml-3">Contactos</div>
          <div className="ml-3">A nossa oferta</div>
          <div className="ml-3">RGPD</div>
          <div className="ml-3">Perguntas frequentes</div>
        </div>
      </div>
    </div>
  );
};

export default SobreTabs;
