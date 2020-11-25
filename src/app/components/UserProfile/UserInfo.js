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
          <div className="col-3">
            <h4>Informações</h4>
            <div>
              <img src="media/heart_icon.png" alt="Likes" />
              <span>23 anos</span>
            </div>
            <div>
              <img src="media/userLocation_icon.png" alt="Location" />
              <span>Viseu</span>
            </div>
          </div>
          <div className="col-7">
            <div className="row">
              <div className="col-6">
                <div className="sub-sec">
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
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                </div>
                <div className="sub-sec">
                  <div className="heading-underline pb-2 mb-3 pl-2">
                    Informações pessoais
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
              </div>
              <div className="col-6">
                <div className="text-muted ml-5">
                  <div className="heading-underline pb-2 mb-3 pl-2">
                    Imagem
                  </div>
                  <div className='user-profile-img'>
                    <img src="media/user-profile.png" alt="User Image"/>
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

export default UserInfo;
