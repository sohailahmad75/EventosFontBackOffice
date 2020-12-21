import React from "react";
import { Link } from "react-router-dom";

const UserInfo = () => {
  return (
    <div className="container-fluid login-container">
      <form>
        <div className="row">
          <div className="offset-3 col-6">
            <h1 className="display-1 pb-2 pb-md-5">José Miguel</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-3 d-flex justify-content-center">
            <div>
              <h4>Informações</h4>
              <div>
                <img src="media/heart_icon.png" alt="Likes" />
                <span>23 anos</span>
              </div>
              <div className="mt-2">
                <img src="media/userLocation_icon.png" alt="Location" />
                <span>Viseu</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 ">
            <div className="row">
              <div className="col-12 order-2 order-md-1 col-md-6">
                <div className="sub-sec mb-5">
                  <div className="heading-underline pb-2 mb-3 pl-2">
                    Dados de acesso
                  </div>
                  <div className="container pb-5">
                    <div className="row p-3 mb-3 user-info-input align-items-center">
                      <div className="col-2">
                        <img src="media/account_icon.png" alt="" />
                      </div>
                      <div className="col-10">
                        <div className="text-muted mb-1">Username</div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                        />
                      </div>
                    </div>

                    <div className="row p-3 mb-3 user-info-input align-items-center">
                      <div className="col-2">
                        <img src="media/lock_icon.png" alt="" />
                      </div>
                      <div className="col-10">
                        <div className="text-muted mb-1">Password</div>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="row p-3 mb-3 user-info-input align-items-center">
                      <div className="col-2">
                        <img src="media/email_icon.png" alt="" />
                      </div>
                      <div className="col-10">
                        <div className="text-muted mb-1">Email</div>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="email"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sub-sec">
                  <div className="heading-underline pb-2 mb-3 pl-2">
                    Informações pessoais
                  </div>
                  <div className="container pb-5">
                    <div className="row pt-3 pb-2 px-1 mb-3 user-info-input align-items-center">
                      <div className="col-12">
                        <div className="text-muted mb-1">Username</div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="w-50">
                          <div className="row pt-3 pb-2 px-1 mb-3 user-info-input align-items-center">
                            <div className="col-12">
                              <div className="text-muted small mb-1">
                                Data de nascimento
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Date"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-50">
                          <div className="row pt-3 pb-2 px-1 mb-3 user-info-input align-items-center">
                            <div className="col-12">
                              <div className="text-muted small mb-1">Rua</div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Rua"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="w-50">
                          <div className="row pt-3 pb-2 px-1 mb-3 user-info-input align-items-center">
                            <div className="col-12">
                              <div className="text-muted small mb-1">
                                Cidade
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Date"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-50">
                          <div className="row pt-3 pb-2 px-1 mb-3 user-info-input align-items-center">
                            <div className="col-12">
                              <div className="text-muted small mb-1">País</div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Rua"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sub-sec">
                  <div className="heading-underline pb-2 mb-3 pl-2">
                    Número de federado
                  </div>
                  <div className="container pb-2">
                    <div className="row pt-3 pb-2 px-1 mb-3 user-info-input align-items-center">
                      <div className="col-12">
                        <div className="text-muted mb-1">
                          Número de federado
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="(Não aplicável)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <button className="btn btn-warning  btn-sm m-1 w-50 font-weight-bold text-uppercase">
                    Confirmar
                  </button>
                  <button className="btn btn-dark btn-sm m-1 w-50 font-weight-bold text-uppercase">
                    Cancelar
                  </button>
                </div>
              </div>
              <div className="col-12 col-md-6 order-1 order-md-2">
                <div className="text-muted ml-md-5 ml-0 mb-5">
                  <div className="heading-underline pb-2 mb-3 pl-2">Imagem</div>
                  <div className="user-profile-img">
                    <img src="media/user-profile.png" alt="User Image" />
                  </div>
                  <button
                    style={{ cursor: "pointer" }}
                    className="btn btn-light-gray w-100  p-3 mt-3 font-weight-bold d-flex justify-content-between text-uppercase file-btn"
                  >
                    <span>Foto de prefil </span>
                    <input type="file" name="file" />
                    <img src="/media/publish_icon.png" alt="upload icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
