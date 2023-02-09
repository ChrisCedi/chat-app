import React, { useState, useContext } from "react";
import { TextField, Hidden, Button, IconButton } from "@material-ui/core";
import { useStyles } from "./InputMessageStyles";
import SendIcon from "@material-ui/icons/Send";
import { HeaderContext } from "../Header/HeaderProvider";
import clsx from "clsx";
import { ChatContext } from "../../context/ChatProvider";

const InputMessage = () => {
  const classes = useStyles();
  const { open } = useContext(HeaderContext);
  const { addMessage, user } = useContext(ChatContext);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    const username = user.username.split(" ");
    addMessage(user.uid, message, username[0]);
    setMessage("");
  };

  return (
    <div
      className={clsx(classes.container, {
        [classes.appBarShift]: open,
      })}
    >
      <TextField
        label="Mesaje"
        placeholder="Ej: Holaaa"
        variant="outlined"
        size="small"
        value={message}
        multiline
        className={classes.textField}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Hidden smDown>
        <Button
          color="primary"
          variant="contained"
          disabled={message === "" ? true : false}
          onClick={sendMessage}
        >
          enviar
        </Button>
      </Hidden>
      <Hidden mdUp>
        <IconButton
          disabled={message === "" ? true : false}
          onClick={sendMessage}
        >
          <SendIcon />
        </IconButton>
      </Hidden>
    </div>
  );
};

export { InputMessage };
