import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
  textField: {
    width: "90%",
    backgroundColor: theme.palette.common.white,
    borderRadius: 5,
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down("xs")]: {
      width: 0,
      marginLeft: -10,
    },
  },
}));

export { useStyles };
