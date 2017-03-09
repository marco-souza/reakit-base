import "./styles.styl";
import React from "react";
import {Container,Grid} from "reakit";

class App extends React.Component{
    render() {
        return (
            <Container>
                <Grid>
                <Grid.Cell>
                    <div style={{marginBottom: "20pt", padding: 10 + "pt", background: "#f5f5f5"}}>
                        One
                    </div>
                </Grid.Cell>

                <Grid.Cell span={2}>
                    <div style={{marginBottom: "20pt", padding: 10 + "pt", background: "#f5f5f5"}}>
                        Two
                    </div>
                </Grid.Cell>

                <Grid.Cell>
                    <div style={{marginBottom: "20pt", padding: 10 + "pt", background: "#f5f5f5"}}>
                        Three
                    </div>
                </Grid.Cell>
            </Grid>
            </Container>
        );
    }
}

export default App;
