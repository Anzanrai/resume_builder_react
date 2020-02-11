import React from 'react';
import {Button, Form} from "react-bootstrap";


class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            emailOrUsername: '',
            password: '',
        }
    }

    updateField = (e) => {
        let fieldName = e.target.name;
        this.setState({
            [fieldName]: e.target.value
        })
    };
    render() {
        console.log(this.state);
        return(
            <div className={'form-container'}>
                <Form>
                    <Form.Group controlId="formEmail">
                        <Form.Control name={'emailOrUsername'} type="text" placeholder="Enter email or username"
                                      onChange={this.updateField} value={this.state.emailOrUsername}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Control name={'password'} type="password" placeholder="Password"
                                      onChange={this.updateField} value={this.state.password}
                        />
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