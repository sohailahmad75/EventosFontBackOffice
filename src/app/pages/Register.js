import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="container-fluid login-container">
      <form>
        <div className="row">
          <div className="col-md-3">
            <div className="back-btn">
              <Link to="/login">
                <i className="fa fa-arrow-left mr-2" aria-hidden="true"></i>
                Voltar
              </Link>
            </div>
          </div>
          <div className=" col-md-6 login-form-1 col-12 ">
            <div className="row">
              <div className="col-12">
                <h1 className="display-1 pb-2 pb-md-5">Registo</h1>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="heading-underline pb-2 mb-3 pl-2">
                      Dados de acesso
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="*Username"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="*Repetir password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-12 d-none d-md-block">
                    <div className="text-muted ml-5">
                      *Campos de preenchimento <br /> obrigatório
                    </div>
                  </div>
                </div>

                <div className="row mt-2 mt-md-5 pt-2 pt-5">
                  <div className="col-md-6 col-12">
                    <div className="heading-underline pb-2 mb-3 pl-2">
                      Informações pessoais
                    </div>
                    <div className="row profile-area w-100 d-flex justify-content-between m-auto">
                      <div className="w-35">
                        <div className="userImage">
                          <img
                            src="/media/dummyProfile.svg"
                            width="100%"
                            height="100%"
                            alt="user Image"
                          />
                        </div>
                      </div>
                      <div className="w-60">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="*Primeiro nome"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="*Último nome"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row profile-area w-100 d-flex justify-content-between m-auto">
                      <div className="w-35">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="**Data nasc."
                          />
                        </div>
                      </div>
                      <div className="w-60">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="*Telefone"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row profile-area w-100 d-flex justify-content-between m-auto">
                      <div className="w-60">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="*Rua"
                          />
                        </div>
                      </div>
                      <div className="w-35">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="*Cód. Postal"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row profile-area w-100 d-flex justify-content-between m-auto">
                      <div style={{ width: "47%" }}>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="*Cidade"
                          />
                        </div>
                      </div>
                      <div style={{ width: "47%" }}>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="*País"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-2 mt-md-5 pt-2 pt-5">
                  <div className="col-md-6 col-12">
                    <div className="heading-underline pb-2 mb-3 pl-2">
                      Número de federado
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Número de federado"
                      />
                    </div>
                    <div className="mt-2 mt-md-5">
                      <span className="text-muted">Confirmo que li os</span>
                      <span className="font-weight-bold">
                        {" "}
                        termos e condições.
                      </span>
                    </div>
                    <Link
                      to="/login"
                      className="btn btn-secondary theme-button mt-3"
                    >
                      Registar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
