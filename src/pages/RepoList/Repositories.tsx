import User from "./User";
import useStyles from "./styles";
import { useCont } from "../../contexts";
import {
  Card,
  Button,
  Typography,
} from "@material-ui/core";
import DotLoader from "react-spinners/DotLoader";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";

function Repositories() {
  const classes = useStyles();
  const {
    project,
    isLoading,
    setSelectedRepo,
    settingRepositories,
    backButton,
  } = useCont();
  const newData = project.data;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSelectedRepo(e.target.name);
    settingRepositories(e.target.name);
  };

  const handleClick = () => {
    backButton();
  };

  const openInNewTab = (url: any) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div>
      {isLoading ? (
        <>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              backgroundColor: "#000",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100vh",
            }}
          >
            <DotLoader color={"#58a6ff"} size={50} />
          </div>
        </>
      ) : (
        <>
          <div className={classes.root}>
            <div style={{ width: "30%" }}>
              <User />
            </div>
            <Card className={classes.cardRoot}>
              <header>User's Repositories</header>
              <hr />
              {newData.map((value: any) => {
                return (
                  <form onSubmit={handleSubmit} name={value.name}>
                    <Accordion
                      style={{ margin: "0.9rem 1rem", border: "1px solid black" }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{
                          borderBottom: "1px solid #00000052",
                          marginBottom: "0",
                        }}
                      >
                        <Typography component="h4">
                          <h3 className={classes.heading}>
                            <BookOutlinedIcon
                              style={{ color: "#000", marginRight: "0.5rem" }}
                            />
                            {value.name}
                          </h3>
                          <div style={{ margin: "0.5rem 0 0.5rem 1.8rem" }}>
                            {value.description ? value.description : "N/A"}
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails style={{ display: "block" }}>
                        <Typography className={classes.accRoot}>
                          <p>
                            {value.language}
                          </p>
                          <a href={value.html_url}>{value.html_url}</a>
                          <div>
                            <Button
                              onClick={() => openInNewTab(value.html_url)}
                            >
                              Source
                            </Button>
                            <Button type="submit">README</Button>
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </form>
                );
              })}
            </Card>
          </div>
          <div style={{ textAlign: "center" }}>
            <Button
              color="primary"
              variant="outlined"
              className={classes.button}
              onClick={handleClick}
            >
              Back
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Repositories;
