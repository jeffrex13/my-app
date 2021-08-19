import ReactMarkdown from "react-markdown";
import { useCont } from "../../contexts";
import useStyles from "./styles";
import { Button, Container, Typography } from "@material-ui/core";

const Readme = () => {
  const { readme, backButton1 } = useCont();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography component="div" className={classes.Typography}>
          <div className={classes.page}>
              <ReactMarkdown source={readme} />
            <div style={{ margin: "1rem auto", width: "30%" }}>
              <Button
                color="primary"
                variant="outlined"
                className={classes.button}
                onClick={backButton1}
              >
                Back
              </Button>
            </div>
          </div>
        </Typography>
      </Container>
    </div>
  );
};

export default Readme;
