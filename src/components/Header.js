import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { algorithms } from "./AlgorithmContext";

export default class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {algorithm: algorithms["greedy"]};
    }

    setAlgorithm = (alg) => {
        this.setState({algorithm: algorithms[alg]})
    }

    render(){
        return (
            <div className="Header">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>Pathing Visualizer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Button onClick={this.props.algorithmOverlord.search}>Search!</Button>
                        <NavDropdown title={this.state.algorithm} id="basic-nav-dropdown">
                        {Object.entries(algorithms).map((value, index) => {
                            return <NavDropdown.Item onClick={() => this.props.algorithmOverlord.updateAlgorithm(value[0])}>{value[1]}</NavDropdown.Item>
                        })}
                        </NavDropdown>
                        <NavDropdown title="Generate Board" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => this.props.algorithmOverlord.makeMaze()}>Random Maze</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => this.props.algorithmOverlord.makeBlocks()}>Random Blocks</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={this.props.algorithmOverlord.clearBoard}>Clear All</Nav.Link>
                        <Nav.Link onClick={this.props.algorithmOverlord.clearPaths}>Clear Paths</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
