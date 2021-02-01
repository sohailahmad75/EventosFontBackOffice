import React from "react";
import { Formik } from "formik";
import FormInput from "../UserProfile/FormInput";
import AlternateEmailOutlinedIcon from "@material-ui/icons/AlternateEmailOutlined";
import HttpIcon from "../svgs/HttpIcon";
import PhoneIcon from "../svgs/PhoneIcon";
import EmailIcon from "../svgs/EmailIcon";
import PrintIcon from "../svgs/PrintIcon";
import LocationIcon from "../svgs/LocationIcon";
import ClockIcon from "../svgs/ClockIcon";

const ContactosForm = () => {
  return (
    <Formik
      initialValues={{
        site: "",
        telefone: "",
        email: "",
        fax: "",
        morada: "",
        horario: "",
      }}
      validate={(values) => {
        const errors = {};
        Object.entries(values).forEach(([key, value]) => {
          if (!value) {
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
        console.log("values", values);
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
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-12 col-md-6">
                <FormInput
                  title={"Site"}
                  icon={() => <HttpIcon fill={"#fff"} />}
                  name={"site"}
                  placeholder={"Site"}
                />
              </div>
              <div className="col-12 col-md-6">
                <FormInput
                  title={"Telefone"}
                  icon={() => <PhoneIcon fill={"#fff"} />}
                  name={"telefone"}
                  placeholder={"Telefone"}
                  type={"tel"}
                />
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-12 col-md-6">
                <FormInput
                  title={"Email"}
                  icon={() => <EmailIcon fill={"#fff"} />}
                  name={"email"}
                  placeholder={"Email"}
                  type={"email"}
                />
              </div>
              <div className="col-12 col-md-6">
                <FormInput
                  title={"Fax"}
                  icon={() => <PrintIcon fill={"#fff"} />}
                  name={"fax"}
                  placeholder={"Fax"}
                  type={"tel"}
                />
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-12 col-md-6">
                <FormInput
                  title={"Morada"}
                  icon={() => <LocationIcon fill={"#fff"} />}
                  name={"morada"}
                  placeholder={"Morada"}
                />
              </div>
              <div className="col-12 col-md-6">
                <FormInput
                  title={"Horario"}
                  icon={() => <ClockIcon fill={"#fff"} />}
                  name={"horario"}
                  placeholder={"Horario"}
                  rows={3}
                />
              </div>
            </div>
            <button className="btn btn-light" type={"submit"}>
              Send
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ContactosForm;
