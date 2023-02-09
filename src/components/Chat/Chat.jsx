import React, { useContext } from "react";
import { useStyles } from "./ChatStyles";
import { Box, Typography } from "@material-ui/core";
import { InputMessage } from "../InputMessage/InputMessage";
import { Header } from "../Header/Header";
import clsx from "clsx";
import { HeaderContext } from "../Header/HeaderProvider";

const Chat = () => {
  const classes = useStyles();
  const { open } = useContext(HeaderContext);

  return (
    <div
      className={clsx(classes.container, {
        [classes.appBarShift]: open,
      })}
    >
      <Header />
      <Box className={classes.boxChat}>
        <Box className={classes.boxRight}>
          <Box className={classes.boxMessageR}>
            <Typography className={classes.message}>
              Hola soy emisor y estoy probando los mensajes y ver que tam
              grandes pueden ser, el mensaje que envie se rompio, pero al
              parecer este ya no se rompio, sigo probando, hastaa qui todo bien,
              ajkind sdjn cs dksd ckjs dkjd jch sj xje rvñwe vwejkr vhje
            </Typography>
            <Typography className={classes.hour}>12:30</Typography>
          </Box>
        </Box>
        <Box className={classes.boxLeft}>
          <Box className={classes.boxMessageL}>
            <Typography className={classes.message}>
              Hola soy receptor
            </Typography>
            <Typography className={classes.hour}>12:30</Typography>
          </Box>
        </Box>
        <InputMessage />
      </Box>
    </div>
  );
};

export { Chat };
