import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchAppBar from "./components/Navbar";
import { AllProvider } from "./contexts";
import home from "./pages/home";
import repoList from "./pages/repoList";
import readme from "./pages/readme";

function App() {
  return (
    <Router>
      <AllProvider>
      <SearchAppBar />
        <Switch>
          
          <Route
            path="/projects/:id/:project/readme"
            exact
            component={readme}
          />
          <Route path="/projects/:id" component={repoList} />
          <Route path="/" exact component={home} />
        </Switch>
      </AllProvider>
    </Router>
  );
}

export default App;
