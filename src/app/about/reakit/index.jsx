import React from "react";

class Reakit extends React.Component {
    render() {
        return(
            <p>The id is: {this.props.match.params.about}</p>
        );
    }
}

export default Reakit;
