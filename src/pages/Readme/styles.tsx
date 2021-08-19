import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    maxWidth: "100vw",
    color: "#000",
  },
  button: {
    display: 'block',
    backgroundColor: "transparent !important",
    border: '1px solid',
    color: "#000",
    margin: "auto",
    padding: "0.5rem 3rem",
  },
  Typography: {
    flexGrow: 1,
    position: "relative",
    border: "1px solid #30363d",
    fontFamily: "Tahoma",
    marginBottom: "3rem",
    marginTop: "4%",
    minHeight: "100vh",
    width: "960px",
    wordBreak: "break-all",
    "& h1": {
      paddingBottom: "15px",
      borderBottom: "1px solid #30363d",
      margin: "15px 0 10px 0",
      fontSize: "22px"
    },
    "& h2": {
      paddingBottom: "15px",
      borderBottom: "1px solid #30363d",
      margin: "15px 0 10px 0",
      fontSize: "20px"
    },
    "& h3, h4": {
      paddingBottom: "15px",
      borderBottom: "1px solid #30363d",
      margin: "15px 0 10px 0",
      fontSize: "18px"
    },
    "& code": {
      backgroundColor: "#f0f6fc26",
      borderRadius: "6px",
      whiteSpace: "normal",
      wordBreak: "break-all",
    },
    "& a": {
      textDecoration: "none",
      color: "#000",
    },
    "& p": {
      fontSize: "16px",
      lineHeight: 1.5,
    },
  },
  page: {
    padding: "25px 65px 65px",
  },
}));

export default useStyles;
