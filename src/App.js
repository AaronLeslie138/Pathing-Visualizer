import React from 'react';

import Header from "./components/Header";
import Grid from "./components/Grid";
import { AlgorithmmOverlord } from "./components/AlgorithmContext";

class PathingApp extends React.Component {

  constructor(props) {
    super(props);
    this.headerRef = React.createRef();
    this.gridRef = React.createRef();
    this.algorithmOverlord = new AlgorithmmOverlord(this.headerRef, this.gridRef);
  }

  render(){
    return(
        <div className="pathingApp">
          <Header ref={this.headerRef} algorithmOverlord={this.algorithmOverlord}></Header>
          <Grid ref={this.gridRef} algorithmOverlord={this.algorithmOverlord}></Grid>
        </div>
    );
  }
}

export default PathingApp;
