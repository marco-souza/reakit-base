import styles from "./styles.styl";
import classNames from "classnames";
import React from "react";
import logoIcon from "assets/images/logo.png";
import {Bar} from "reakit";
import {
    Link
} from "react-router-dom";

class Menu extends React.Component{

    state = {
        barOpen: false
    }
    render() {
        return (
            <Bar fixedOnTop={true}
                className="menu"
                open={this.state.barOpen}
                onToggle={() => { this.setState({barOpen: !this.state.barOpen}); }}>
                <Bar.Container withBottomLine={true} className={classNames([ styles.menu ])}>
                    <Bar.Header>
                        <Bar.Menu togglable={false}>
                            <Bar.Item>
                                <Link to="/">
                                    <img height={40} src={logoIcon} />
                                </Link>
                            </Bar.Item>
                        </Bar.Menu>

                        <Bar.Toggle
                            openComponent={<span className="icon-menu"></span>}
                            closeComponent={<span className="icon-delete"></span>}>
                        </Bar.Toggle>
                    </Bar.Header>

                    <Bar.Body>
                        <Bar.Menu>
                            <Bar.Item>
                                <Link to="/">Home</Link>
                            </Bar.Item>
                            <Bar.Item>
                                <Link to="/about">About</Link>
                            </Bar.Item>
                        </Bar.Menu>
                    </Bar.Body>
                </Bar.Container>
            </Bar>
        );
    }
}

export default Menu;
