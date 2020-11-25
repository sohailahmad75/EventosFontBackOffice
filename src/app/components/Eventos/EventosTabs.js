import React from "react";

const EventosTabs = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="container py-4">
        <div
          className="d-flex align-items-center text-dark"
          style={{ fontSize: 14 }}
        >
          <div className="mr-3">Próximos eventos</div>
          <div className="ml-3">Eventos passados</div>
        </div>
      </div>
    </div>
  );
};

export default EventosTabs;
