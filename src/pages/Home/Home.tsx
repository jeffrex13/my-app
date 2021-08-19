import { useCont } from "../../contexts";
import useStyles from "./styles";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import DotLoader from "react-spinners/DotLoader";

const Home = () => {
  const classes = useStyles();
  const { isLoading, username, setUsername, error, settingUsername } =
    useCont();

  const handleChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handleClick = async () => {
    settingUsername();
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
            <span>
              <DotLoader color={"#58a6ff"} size={50} />
            </span>
          </div>
        </>
      ) : (
        <>
          <div className={classes.root}>
            <Container maxWidth="md">
              <Typography component="div">
                <h2>
                  <span
                    style={{
                      color: "#3f51b5",
                    }}
                  >
                    RepoSearchtory
                  </span>
                </h2>

                <p>
                  Search for Github Repositories by typing in any Github
                  username.
                </p>

                <div className="inputField">
                  <TextField
                    error={error && true}
                    placeholder="Username"
                    name="username"
                    variant="outlined"
                    value={username}
                    className={classes.textField}
                    onChange={handleChange}
                  />
                  <Button className={classes.button} onClick={handleClick}>
                    <SearchIcon />
                  </Button>
                </div>
              </Typography>
            </Container>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
