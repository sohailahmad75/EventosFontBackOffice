import React from "react";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AlternateEmailOutlinedIcon from "@material-ui/icons/AlternateEmailOutlined";
import { Formik } from "formik";
const UserInfo = () => {
  return (
    <div className="container-fluid login-container">
      <Formik
        initialValues={{
          email: "",
          password: "",
          userName: "",
          name: "",
          date: "",
          rua: "",
          cidade: "",
          pais: "",
          file: "",
          numero: "",
        }}
        validate={(values) => {
          const errors = {};
          Object.entries(values).forEach(([key, value]) => {
            if (!value) {
              console.log("errors[key]", key);
              errors[key] = `${key} is required`;
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
          });
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="offset-3 col-6">
                <h1 className="display-1 pb-2 pb-md-5 font-weight-bold">
                  José Miguel
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-3 d-flex justify-content-center">
                <div>
                  <h4 className="font-weight-bold">Informações</h4>
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
                      <div className="heading-underline pb-2 mb-3 pl-2 font-weight-bold">
                        Dados de acesso
                      </div>
                      <div className="container pb-3 pt-2">
                        <FormInput
                          title={"UserName"}
                          icon={AccountCircleOutlinedIcon}
                          name={"userName"}
                          placeholder={"UserName"}
                        />

                        <FormInput
                          title={"Password"}
                          icon={LockOutlinedIcon}
                          name={"password"}
                          placeholder={"Password"}
                          type={"password"}
                        />

                        <FormInput
                          title={"Email"}
                          icon={AlternateEmailOutlinedIcon}
                          name={"email"}
                          placeholder={"Email"}
                          type={"email"}
                        />
                      </div>
                    </div>
                    <div className="sub-sec">
                      <div className="heading-underline pb-2 mb-3 pl-2 font-weight-bold">
                        Informações pessoais
                      </div>
                      <div className="container pb-3">
                        <FormInput
                          title={"Name"}
                          name={"name"}
                          placeholder={"Name"}
                        />
                        <div className="two-inputs-group">
                          <FormInput
                            title={"Data de nascimento"}
                            name={"date"}
                            placeholder={"Data de nascimento"}
                            type={"date"}
                          />
                          <FormInput
                            title={"Rua"}
                            name={"rua"}
                            placeholder={"Rua"}
                          />
                        </div>
                        <div className="two-inputs-group">
                          <FormInput
                            title={"Cidade"}
                            name={"cidade"}
                            placeholder={"Cidade"}
                          />
                          <FormInput
                            title={"País"}
                            name={"pais"}
                            placeholder={"País"}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="d-flex">
                      <button
                        className="btn btn-success rounded btn-sm m-1 w-50 font-weight-bold text-uppercase"
                        type="submit"
                      >
                        Editar
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 order-1 order-md-2">
                    <div className="text-muted ml-md-5 ml-0 mb-5">
                      <div className="heading-underline pb-2 mb-3 pl-2 font-weight-bold">
                        Imagem
                      </div>
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
                      <div className="sub-sec mt-5">
                        <div className="heading-underline pb-2 mb-3 pl-2 font-weight-bold">
                          Número de federado
                        </div>
                        <FormInput
                          title={"Número de federado"}
                          name={"numero"}
                          placeholder={"Número de federado"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default UserInfo;
