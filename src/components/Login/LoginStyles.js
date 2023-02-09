import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  gridLogin: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    color: "#6C63FF",
    fontWeight: "Bold",
    paddingBottom: theme.spacing(4),
  },
  description: {
    paddingBottom: theme.spacing(2),
    textAlign: "center",
  },
  gridImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    display: "flex",
    boxShadow: "5px 5px 5px #aaaaaa",
    textTransform: "none",
  },
  gIcon: {
    width: "25px",
    height: "25px",
    paddingLeft: theme.spacing(1),
  },
  imageBg: {
    width: "60%",
  },
  gridMobile: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
    position: "absolute",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
  },
  imageMobile: {
    zIndex: 1,
    paddingTop: theme.spacing(1),
    width: "60%",
  },
}));

export { useStyles };
