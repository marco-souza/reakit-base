import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router-dom";
import Reakit from "./reakit";
import {Container} from "reakit";

class About extends React.Component{
    render() {
        return (
            <Router>
                <Container>
                    <h1>About</h1>

                    <ul>
                        <li>
                            <Link to={`${this.props.match.url}/reakit`}>Reakit</Link>
                        </li>
                    </ul>

                    {/* Routes */}
                    <Route path={`${this.props.match.url}/:about`} component={Reakit} />
                    <Route exact path={this.props.match.url} render={() => (
                        <p>Reakit base is a simple scaffold for create Reakit Projects</p>
                    )} />
                </Container>
            </Router>
        );
    }
}

export default About;
