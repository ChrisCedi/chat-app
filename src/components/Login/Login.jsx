import React, { useContext } from "react";
import { useStyles } from "./LoginStyles";
import { Grid, Typography, Button } from "@material-ui/core";
import { Images } from "../../assets/images";
import { ChatContext } from "../../context/ChatProvider";
import { withWidth } from "@material-ui/core";

const Login = ({ width }) => {
  const classes = useStyles();
  const { loginUser } = useContext(ChatContext);

  return (
    <>
      {width === "xs" ? (
        <Grid className={classes.gridMobile}>
          <Typography className={classes.title} variant="h4">
            Context Chat
          </Typography>
          <Typography className={classes.description}>
            Mensajes rapidos y seguros para todos, inicia sesión aqui.
          </Typography>

          <Button
            className={classes.button}
            variant="outlined"
            onClick={loginUser}
          >
            <Typography>Ingresar con Google</Typography>
            <img src={Images.GoogleIcon} className={classes.gIcon} alt="icon" />
          </Button>

          <img
            src={Images.bgLogin}
            alt="loginBg"
            className={classes.imageMobile}
          />
        </Grid>
      ) : (
        <Grid container className={classes.container}>
          <Grid item sm={6} className={classes.gridLogin}>
            <Typography className={classes.title} variant="h4">
              Context Chat
            </Typography>
            <Typography className={classes.description}>
              Mensajes rapidos y seguros para todos, inicia sesión aqui.
            </Typography>

            <Button
              className={classes.button}
              variant="outlined"
              onClick={loginUser}
            >
              <Typography>Ingresar con Google</Typography>
              <img
                src={Images.GoogleIcon}
                className={classes.gIcon}
                alt="icon"
              />
            </Button>
          </Grid>
          <Grid item sm={6} className={classes.gridImage}>
            <img
              src={Images.bgLogin}
              alt="loginBg"
              className={classes.imageBg}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default withWidth()(Login);
