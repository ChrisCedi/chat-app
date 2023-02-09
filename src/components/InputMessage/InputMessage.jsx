import React, { useState, useContext } from "react";
import { TextField, Hidden, Button, IconButton } from "@material-ui/core";
import { useStyles } from "./InputMessageStyles";
import SendIcon from "@material-ui/icons/Send";
import { HeaderContext } from "../Header/HeaderProvider";
import clsx from "clsx";

const InputMessage = () => {
  const classes = useStyles();
  const { open } = useContext(HeaderContext);
  const [message, setMessage] = useState("");

  return (
    <div
      className={clsx(classes.container, {
        [classes.appBarShift]: open,
      })}
    >
      <TextField
        placeholder="Mensaje"
        variant="outlined"
        size="small"
        className={classes.textField}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Hidden smDown>
        <Button
          color="primary"
          variant="contained"
          disabled={message === "" ? true : false}
        >
          enviar
        </Button>
      </Hidden>
      <Hidden mdUp>
        <IconButton disabled={message === "" ? true : false}>
          <SendIcon />
        </IconButton>
      </Hidden>
    </div>
  );
};

export { InputMessage };
