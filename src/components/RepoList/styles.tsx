import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "0",
    maxWidth: "100vw",
    height: "100%",
    display: "flex",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    display: "flex",
    alignItems: "center",
  },
  accRoot: {
    padding: "0.5rem",
    "& a": {
      color: "#000",
      textDecoration: "none",
    },
      "& p ": {
        color: "#000",
        fontWeight: "600",
        textTransform: "capitalize",
        marginBottom: "0.5rem",
        display: "block",
      },
      "& h4 ": {
        color: "#000",
        fontWeight: "500",
        textTransform: "capitalize",
      },
      "& button": {
        color: "#000",
        borderRadius: "0px",
        marginTop: "20px",
        transition: "transform .2s",
      },
      "& button:hover": {
        transform: "scale(1.1)",
      },
  },
  flexDiv: {
    display: "flex",
    alignItems: "center"
  },
  info: {
    padding: '0 20px',
  },
  grid: {
    flexGrow: 1,
  },
  avatarHolder: {
    marginTop: "50px",
    display: "inline-block",
  },
  tfHolder: {
    display: "flex",
    marginBottom: "10px",
  },
  textField: {
    flexGrow: 0.5,
    margin: "auto",
    "& input ": {
      color: "#000",
    },
    "& .MuiFormLabel-root": {
      color: "#000",
    },
    "& label.Mui-focused": {
      color: "#000",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#30363d",
      },
      "&:hover fieldset": {
        borderColor: "#c7cfb7",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#388BFD",
        borderWidth: "3px",
      },
    },
  },
  button: {
    backgroundColor: "transparent !important",
    border: '1px solid #21094E',
    color: "#21094E",
    margin: "0 0 10rem 5rem",
    padding: "0.5rem 3rem",
  },
  userInfo: {
    color: "#000000a6",
    margin: "20px 20px 0 80px",
    paddingeft: '30px',
    "& h3": {
      color: "#000",
    },
  },
  avatar: {
    borderRadius: "50%",
    border: "1px solid #30363d",
    height: "300px",
    width: "300px",
    marginBottom: "1.5rem",
  },
  gridRoot: {
    padding: "10px 20px 10px 10px",
  },
  cardRoot: {
    border: "1px solid #444c56",
    backgroundColor: "transparent",
    borderRadius: "10px",
    height: "100%",
    width: "80%",
    padding: "0 0 15px 0",
    margin: "5rem 7rem 5rem 5rem",
    color: "#000",
    "& h3 ": {
      color: "#3f51b5",
      fontWeight: "600",
      textTransform: "capitalize",
    },
    "& h4 ": {
      color: "#000",
      fontWeight: "500",
      textTransform: "capitalize",
    },
    "& header ": {
      // background: "#787A91",
      color: "#000",
      fontWeight: "600",
      textTransform: "capitalize",
      padding: " 1.2rem 1rem 1rem",
    },
    " & .repoInfo": {
      paddingTop: "10px",
      fontSize: "12px",
      "& a": {
        color: "#000",
        textDecoration: "none",
      },
    },
    " & .MuiCardActions-root": {
      position: "absolute",
      right: "25px",
      bottom: "10px",
      "& button": {
        color: "#000",
        borderRadius: "0px",
        margin: "10px",
        transition: "transform .2s",
      },
      "& button:hover": {
        transform: "scale(1.1)",
      },
    },
    
  },
}));

export default useStyles;
