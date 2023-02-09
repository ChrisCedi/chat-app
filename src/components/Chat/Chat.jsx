import React, { useContext, useEffect, useRef } from "react";
import { useStyles } from "./ChatStyles";
import { Box, Typography } from "@material-ui/core";
import { InputMessage } from "../InputMessage/InputMessage";
import { Header } from "../Header/Header";
import clsx from "clsx";
import { HeaderContext } from "../Header/HeaderProvider";
import { ChatContext } from "../../context/ChatProvider";
import { format } from "date-fns";

const Chat = () => {
  const classes = useStyles();
  const { open } = useContext(HeaderContext);
  const { messages, user } = useContext(ChatContext);
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  return (
    <div
      className={clsx(classes.container, {
        [classes.appBarShift]: open,
      })}
    >
      <Header />
      <Box className={classes.boxChat} ref={chatRef}>
        {messages.map((item, index) =>
          item.id === user.uid ? (
            <Box className={classes.boxRight} key={index}>
              <Box className={classes.boxMessageR}>
                <Typography className={classes.message}>
                  {item.message}
                </Typography>
                <Typography variant="caption" className={classes.hour}>
                  {format(new Date(item.dateMesage), "hh:mm aaaaa'm'")}
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box className={classes.boxLeft} key={index}>
              <Box className={classes.boxMessageL}>
                <Typography variant="caption" color="primary">
                  {item.username}
                </Typography>
                <Typography className={classes.message}>
                  {item.message}
                </Typography>
                <Typography variant="caption" className={classes.hour}>
                  {format(new Date(item.dateMesage), "hh:mm aaaaa'm'")}
                </Typography>
              </Box>
            </Box>
          )
        )}

        <InputMessage />
      </Box>
    </div>
  );
};

export { Chat };
