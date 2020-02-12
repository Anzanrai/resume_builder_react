import React, {useState} from 'react';
import {Container} from "react-bootstrap";
// import logo from './logo-creasume.png';

function Header() {
    const [logoUrl] = useState('./logo-creasume.png');

    return(
        <Container>
            <img src={logoUrl} alt="Crea-Sume"/>
        </Container>
    )
}

export default Header;