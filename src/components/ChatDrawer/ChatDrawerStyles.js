import { makeStyles } from "@material-ui/core";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  username: {
    padding: theme.spacing(2),
  },
  logout: {
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "&:hover": {
      backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
    },
    cursor: "pointer",
  },
  boxDrawer: {
    padding: theme.spacing(2),
  },
  boxProfile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export { useStyles };
