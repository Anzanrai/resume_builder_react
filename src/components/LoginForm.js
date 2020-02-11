import React from 'react';
import {Button, Form} from "react-bootstrap";


class LoginForm extends React.Component {
    render() {
        return(
            <div className={'form-container'}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter email or username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        )
    }
}

export default LoginForm;