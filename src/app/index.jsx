import "./styles.styl";
import React from "react";
import {Container} from "reakit";
import {
    BrowserRouter as Router,
    // Redirect,
    Switch,
    Route
} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Menu from "./menu";

class App extends React.Component{
    render() {
        return (
            <Router>
                <Container>
                    <Menu />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route component={NoMatch} />
                    </Switch>
                </Container>
            </Router>
        );
    }
}
const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
);
export default App;
