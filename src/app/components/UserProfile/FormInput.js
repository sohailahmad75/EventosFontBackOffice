import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import { Field } from "formik";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "transparent",
    },
  },
})(TextField);

const FormInput = ({
  title,
  icon: Icon = "",
  name = "",
  placeholder,
  type = "text",
  required = true,
  rows = 1,
}) => (
  <Field name={name}>
    {({ field, form: { touched, errors } }) => (
      <div
        className="px-3 py-2 mb-3 user-info-input"
        style={{ paddingTop: "15px!important" }}
      >
        <div className="form-input">
          <Grid container alignItems="center">
            {Icon && (
              <Grid item className="mr-3 mt-1">
                <Icon />
              </Grid>
            )}

            <Grid item>
              <CssTextField
                {...field}
                error={Boolean(touched[field.name] && errors[field.name])}
                label={`${title}`}
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                InputLabelProps={{
                  shrink: true,
                }}
                rows={4}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    )}
  </Field>
);

export default FormInput;
