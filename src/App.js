import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpForm from "./components/SignUpForm";
import {Tabs} from 'react-bootstrap';
import Tab from "react-bootstrap/Tab";
import LoginForm from "./components/LoginForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/common/Header";

class App extends React.Component{
  render() {
    return(
        <div>
            <Header/>
            <Container>
                <Row>
                    <Col sm={8} md={7} lg={8}>
                        Description
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

export default App;
