import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Button from '@material-ui/core/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { withStyles, MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";


const styles = {
  huntStyleButton: {
    margin: "20px",
  }
};

const theme = createMuiTheme({
  palette: {
    primary: { main: 'rgb(13, 71, 161)' }
  },
  typography: {
    useNextVariants: true,
  },
});

const theme2 = createMuiTheme({
  palette: {
    primary: { main: '#B71C1C' }
  },
  typography: {
    useNextVariants: true,
  },
});

class CreatePlay extends Component {
  render() {
    return (
      <div className="contentContainer">
        <title>Create or Play</title>
        <header>
          <h1 className="titleh1">ScAvengers</h1>
        </header>
        <p className="def">Welcome to ScAvengers,</p>
        <p className="def">Would you like to create a Scavenger hunt of your own...</p>
        <p className="def"> or play one that's already been created? </p>
        <Row>
          <Col xs lg="6" className="createArea">
            <Link to="/create" className="createLink" style={{ textDecoration: 'none' }}>
              <MuiThemeProvider theme={theme}>
                <Button className="createButton">
                <img className="createStone"src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e01f9dd1-f4fa-4f67-bac7-ccdcc28eba07/dbrx6jc-e0dec3bc-f151-49b3-b5cb-6bfada6a62d9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UwMWY5ZGQxLWY0ZmEtNGY2Ny1iYWM3LWNjZGNjMjhlYmEwN1wvZGJyeDZqYy1lMGRlYzNiYy1mMTUxLTQ5YjMtYjVjYi02YmZhZGE2YTYyZDkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sYzftTfw9Hw6BGaYaViEsoRPLPtaKI5Dt8Rg-iQcotI" alt="mind stone"/>
                <div className="createText">Create </div>
                </Button>
              </MuiThemeProvider>
            </Link>
          </Col>
          <Col xs lg="6" className="huntArea">
          <Link to="/chooseGame" className="playLink" style={{ textDecoration: 'none' }}>
            <MuiThemeProvider theme={theme2}>
              <Button className="huntButton">
              <img className="huntStone" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e01f9dd1-f4fa-4f67-bac7-ccdcc28eba07/dbrx6jr-b752cdaa-59ea-4a2a-b0c1-9889e65ce01a.png/v1/crop/w_157,h_250,x_0,y_0,scl_0.41866666666667,strp/space_stone_by_saiol1000_dbrx6jr-250t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTk5IiwicGF0aCI6IlwvZlwvZTAxZjlkZDEtZjRmYS00ZjY3LWJhYzctY2NkY2MyOGViYTA3XC9kYnJ4NmpyLWI3NTJjZGFhLTU5ZWEtNGEyYS1iMGMxLTk4ODllNjVjZTAxYS5wbmciLCJ3aWR0aCI6Ijw9Mzc1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.9hT_VHHAv1I__4dlbYvlJC8wF4yjZucf4A-4KhhhhhM" alt="space stone"/>
                <div className="huntText">Hunt</div>
              </Button>
            </MuiThemeProvider>
          </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withStyles(styles)(CreatePlay);
