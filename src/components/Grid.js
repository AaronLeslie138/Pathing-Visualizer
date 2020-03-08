import React from 'react';
import "./Grid.css";
import { width, height} from "./AlgorithmContext"

class Box extends React.Component {
    constructor(props){
        super(props);
        this.state = {class: "inner-blank"};
    }

    setClass = (newClass) => {
        this.setState({class: "inner-" + newClass})
    }

    render(){
        return (
            <div onMouseDown={this.props.clicked}  onMouseOver={this.props.clicked} className="box">
                <div className={this.state.class}></div>
            </div>
        );
    }

}

export default class Grid extends React.Component {
    constructor(props){
        super(props);
        this.boxes = Array(height*width).fill().map(function(){return React.createRef()});
    }

    updateBox = (index, boxState) => {
        this.boxes[index].current.setClass(boxState.state)
    }

    createTable = () => {
        let table = []
        table.push();
        // Outer loop to create parent
        for (let i = 0; i < height; i++) {
          let children = []
          //Inner loop to create children
          for (let j = 0; j < width; j++) {
            children.push(<Box ref={this.boxes[j + width * i]} clicked={(e) => {e.preventDefault(); if(e.buttons === 1) {this.props.algorithmOverlord.clicked(j + width * i)}}}></Box>)
          }
          //Create the parent and add the children
          table.push(<div onMouseDown={(e) => e.preventDefault()}  className="row">{children}</div>)
        }
        return table
    }

    componentDidMount = () => {
        for(let i = 0; i < height * width; i++){
            this.updateBox(i, this.props.algorithmOverlord.boxStates[i])
        }
    }

    render(){
        return (
            <div style={{width: "100%", height: "100%", textAlign: "center"}}>
                <div className="grid" onMouseDown={(e) => e.preventDefault()} >
                    {/*this.expandFringe=expandFringe*/}
                    {this.createTable()}
                </div>
            </div>
        );
    }
}
  