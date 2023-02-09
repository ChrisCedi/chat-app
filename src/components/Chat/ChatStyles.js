import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
  },
  boxRight: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: theme.spacing(1),
  },
  boxLeft: {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: theme.spacing(1),
  },
  hour: {
    fontSize: "11px",
    display: "flex",
    justifyContent: "flex-end",
  },
  boxMessageR: {
    maxWidth: 300,
    height: "auto",
    padding: theme.spacing(2),
    borderRadius: 10,
    backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 250,
    },
  },
  boxMessageL: {
    maxWidth: 300,
    height: "auto",
    padding: theme.spacing(2),
    borderRadius: 10,
    backgroundColor: theme.palette.grey[300],
    [theme.breakpoints.down("sm")]: {
      maxWidth: 250,
    },
  },
  message: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  boxInput: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
    },
  },
  textField: {
    width: "90%",
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.down("xs")]: {
      width: "90%",
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
      marginLeft: 0,
    },
  },
  boxChat: {
    paddingTop: theme.spacing(7),
    height: "80vh",
    overflowY: "scroll",
    // marginBottom: theme.spacing(10),
  },
}));

export { useStyles };
