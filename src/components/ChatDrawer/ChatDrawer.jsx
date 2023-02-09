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
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";

const ChatDrawer = () => {
  const classes = useStyles();
  const { open, handleClose } = useContext(HeaderContext);

  const { logout, user } = useContext(ChatContext);

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
      <Box className={classes.boxDrawer}>
        <IconButton onClick={handleClose}>
          <ArrowBackIosIcon />
        </IconButton>
        <Box className={classes.boxProfile}>
          <Typography className={classes.username}>{user.username}</Typography>
          <Avatar src={user.avatar} alt="file" />
        </Box>
        <CardActionArea
          className={classes.logout}
          onClick={() => {
            logout();
            handleClose();
          }}
        >
          <Typography>Cerrar sesión</Typography>
          <MeetingRoomIcon />
        </CardActionArea>
      </Box>
    </Drawer>
  );
};

export { ChatDrawer };
