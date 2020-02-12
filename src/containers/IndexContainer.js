import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Tabs} from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import SignUpForm from "../components/forms/SignUpForm";
import LoginForm from "../components/forms/LoginForm";
import IndexDescriptionContainer from "./IndexDescriptionContainer";

class IndexContainer extends React.Component{
    componentDidMount() {
        document.title = "Crea-Sume";
    }

    render() {
        return(
            <div className={'index-container'}>
                <Container>
                    <Row>
                        <Col sm={8} md={7} lg={8}>
                            <IndexDescriptionContainer/>
                        </Col>
                        <Col sm={4} md={5} lg={4}>
                            <Tabs defaultActiveKey="signup" id="uncontrolled-tab-example">
                                <Tab eventKey="signup" title="Sign Up">
                                    <SignUpForm/>
                                </Tab>
                                <Tab eventKey="login" title="Login">
                                    <LoginForm/>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default IndexContainer;