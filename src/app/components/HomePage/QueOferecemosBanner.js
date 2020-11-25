import React from "react";

const QueOferecemosBanner = () => {
  return (
    <section
      className="container-fluid pl-3 mt-5 py-3 py-md-5"
      style={{ backgroundColor: "#1a27c9", color: "white" }}
    >
      <div className="row">
        <div className="col-12 col-md-5 offset-0 offset-md-3 mt-5">
          {" "}
          <h1 className="display-1 pl-0 pl-md-5">As nossas modalidades</h1>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-md-3 text-left text-md-center mb-2 mb-md-0  text-uppercase">
          <p className='heading-with-line-white'>O que oferecemos</p>
        </div>
        <div className="col-12 col-md-5 ">
          <div className="container-fluid">
          <div className="row p-4 p-lg-0">

              <div className="col-12 col-lg-6">
                <img
                  style={{maxWidth: '250px'}}
                  src="media/maratonas.png"
                  width="100%"
                  height="auto"
                  alt="maratonas "
                />
                <div>
                  <h3 className='font-weight-bold' style={{marginTop: '-50px'}}>Maratonas BTT</h3>
                  <button className='btn btn-sm btn-warning mt-4 font-weight-bold'>Ver os nossos eventos</button>
                </div>

              </div>
              <div className="col-12 col-lg-6 mt-4 mt-lg-0 text-right">
                <img
                  style={{maxWidth: '250px'}}
                  src="media/percursos.png"
                  width="100%"
                  height="auto"
                  alt="percursos"
                />
                <h3 className='font-weight-bold w-100' style={{marginTop: '-50px'}}>Percursos <br/> pedestres</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueOferecemosBanner;
