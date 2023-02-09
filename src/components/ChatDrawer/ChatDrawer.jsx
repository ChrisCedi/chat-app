import React, { useContext } from "react";
import {
  Drawer,
  IconButton,
  Typography,
  CardActionArea,
  Box,
  Avatar,
} from "@material-ui/core";
import { useStyles } from "./ChatDrawerStyles";
import { HeaderContext } from "../Header/HeaderProvider";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { ChatContext } from "../../context/ChatProvider";

const ChatDrawer = () => {
  const classes = useStyles();
  const { open, handleClose } = useContext(HeaderContext);

  const {
    logout,
    user: { username, avatar },
  } = useContext(ChatContext);

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      onClose
      className={classes.drawer}
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Box>
        <IconButton onClick={handleClose}>
          <ArrowBackIosIcon />
        </IconButton>
        <Box className={classes.boxProfile}>
          <Typography className={classes.username}>{username}</Typography>
          <Avatar src={avatar} />
        </Box>
        <CardActionArea
          onClick={() => {
            logout();
            handleClose();
          }}
        >
          <Typography className={classes.logout}>Cerrar sesión</Typography>
        </CardActionArea>
      </Box>
    </Drawer>
  );
};

export { ChatDrawer };
