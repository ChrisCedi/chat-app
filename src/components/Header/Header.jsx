import React, { useContext } from "react";
import { useStyles } from "./HeaderStyles";
import { Box, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { HeaderContext } from "./HeaderProvider";
import { ChatDrawer } from "../ChatDrawer/ChatDrawer";

const Header = () => {
  const classes = useStyles();
  const { open, handleOpen } = useContext(HeaderContext);

  return (
    <div className={classes.container}>
      <Box
        className={clsx(classes.header, {
          [classes.appBarShift]: open,
        })}
      >
        <IconButton onClick={handleOpen}>
          <MenuIcon />
        </IconButton>
      </Box>
      <ChatDrawer />
    </div>
  );
};

export { Header };
