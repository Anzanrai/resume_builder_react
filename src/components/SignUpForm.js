import React from 'react';
import {Button, Col, Form} from "react-bootstrap";


class SignUpForm extends React.Component {
    render() {
        return(
            <div className={'form-container'}>
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Row>
                            <Col>
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Last name" />
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicUsername">
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">
                        <Form.Control type="text" placeholder="Phone" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign me up!
                    </Button>
                </Form>
            </div>
        )
    }
}

export default SignUpForm;