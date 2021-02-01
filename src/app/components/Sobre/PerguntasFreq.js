import React from "react";
import FrequentesImg from "../svgs/FrequentesImg";
import FrequentesQues from "./FrequentesQues";

const PerguntasFreq = () => (
  <section
    className="container-fluid pl-3 py-3 py-md-5 mt-3 mt-md-5"
    style={{
      background: "#4BAD65",
      color: "#fff",
    }}
  >
    <div className="row">
      <div className="col-12 col-md-6 order-2 order-md-1">
        <FrequentesImg />
      </div>
      <div className="col-12 col-md-6 mt-5 order-1 order-md-2">
        <h1 className="display-1 pl-0">Perguntas frequentes</h1>
        <div className="d-flex align-items-center">
          <FrequentesQues />
        </div>
      </div>
    </div>
  </section>
);

export default PerguntasFreq;
