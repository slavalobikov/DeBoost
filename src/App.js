import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import {Route} from "react-router-dom";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Boost from "./components/Boost/Boost";
import Likes from "./components/Likes/Likes";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Route path="/Main" render={ () => <Main /> } />
        <Route path="/About" render={ () => <About /> } />

        <Route path="/Comments" render={ () => <Likes /> } />
        <Route path="/Boost" render={ () => <Boost /> } />
      </div>
    );
  }
}

export default App;
