import React from "react";
import {Container, Jumbotron} from "react-bootstrap";

export default function IndexDescriptionContainer() {
    return <Jumbotron fluid>
        <Container>
            <div className={'index-description-content'}>
                <h1>
                    Build your resume with <strong>Crea-Sume</strong>
                </h1>
                <h3>Choose from a range of templates to build your resume.</h3>
                <h4>Care to create multiple profiles to save and create resume for different jobs.</h4>
            </div>

        </Container>

        </Jumbotron>
}