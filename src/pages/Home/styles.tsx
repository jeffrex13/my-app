import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: any) => ({
  root: {
    minHeight: "100%",
    width: "100vw",
    display: "flex",
    fontFamily: "",
    alignContent: "center",
    textAlign: "center",
    "& p": {
      color: "#000",
      fontSize: "18px",
      margin: "3rem 0 0",
    },
    "& h2": {
      margin: "20% 0 0",
    },
    "& span": {
      fontSize: "35px",
    },
    "& .inputField": {
      margin: "0.5rem auto",
    },
  },
  textField: {
    flexGrow: 1,
    margin: "30px 5px 0 15px !important",
    width: "300px",
    "& input ": {
      color: "#000",
    },
    "& .MuiFormLabel-root": {
      color: "#000",
    },
    "& label.Mui-focused": {
      color: "000",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#485b71",
      },
      "&:hover fieldset": {
        border: "1px solid #3f51b5",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#388BFD",
        borderWidth: "3px",
      },
    },
  },
  button: {
    boxShadow: 'none',
    marginTop: "35px !important",
    marginLeft: "0",
    backgroundColor: "transparent !important",
    border: "1px solid #485b71 !important",
    borderRadius: "0",
    height: "50px",
    color: "#3f51b5 !important",
    padding: "0",
    "&:hover": {
      border: "1px solid #21094E !important",
      color: "#21094E 2important",
    },
  },
}));

export default useStyles;
