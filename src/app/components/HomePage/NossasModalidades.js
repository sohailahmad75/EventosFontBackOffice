import React from "react";
import BikeIcon from "../svgs/BikeIcon";
import WalkIcon from "../svgs/WalkIcon";
import ScrollContainer from "react-indiana-drag-scroll";

const NossasModalidades = () => {
  return (
    <section className="container-fluid pl-3 mt-5 py-3 py-md-5">
      <div className="d-flex justify-content-center">
        <h1 className="display-1 pl-0 pl-md-5">
          As nossas <br /> modalidades
        </h1>
      </div>
      <div className="container-fluid mt-2 d-flex justify-content-center">
        <ScrollContainer className="que-main " vertical={false}>
          <div className="que-main__item" />
          <div className="que-main__item" />

          <div className="que-main__item bg-warning">
            <BikeIcon size="60" />

            <div>Maratonas BTT</div>
          </div>
          <div className="que-main__item bg-success text-white">
            <WalkIcon fill="#fff" size="60" />
            <div>Percursos pedestres</div>
          </div>
          <div className="que-main__item" />
          <div className="que-main__item" />
          <div className="que-main__item" />
          <div className="que-main__item" />
        </ScrollContainer>
      </div>
    </section>
  );
};

export default NossasModalidades;
