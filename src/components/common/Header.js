import React from 'react';
import {Container} from "react-bootstrap";
// import logo from './logo-creasume.png';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            logoUrl : "./logo-creasume.png"
        }
    }
    render() {
        return(
            <Container>
                <img src={this.state.logoUrl} alt="Crea-Sume"/>
            </Container>

        )
    }
}

export default Header;