import "./styles.styl";
import React from "react";
import {Container} from "reakit";
import {
    BrowserRouter as Router,
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
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                </Container>
            </Router>
        );
    }
}

export default App;
