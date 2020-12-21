import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
const Contactos = () => {
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="row">
            <div className="w-50 m-2">
              <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <img src="media/http_icon_gray.png" alt="" />
                  </Grid>
                  <Grid item>
                    <Input
                      id="input-with-icon-grid"
                      disableUnderline={true}
                      placeholder="Site"
                    />
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactos;
