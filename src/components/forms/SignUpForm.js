import React from 'react';
import {Button, Col, Form} from "react-bootstrap";

class SignUpForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            phone: '',
            password: '',
            confirmPassword: ''
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
                    <Form.Group>
                        <Form.Row>
                            <Col>
                                <Form.Control name={'firstName'} placeholder="First name" onChange={this.updateField}
                                              value={this.state.firstName}
                                />
                            </Col>
                            <Col>
                                <Form.Control name={'lastName'} placeholder="Last name" onChange={this.updateField}
                                              value={this.state.lastName}
                                />
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control name={'email'} type="email" placeholder="Enter email" onChange={this.updateField}
                                      value={this.state.email}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicUsername">
                        <Form.Control name={'username'} type="text" placeholder="Username" onChange={this.updateField}
                                      value={this.state.username}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">
                        <Form.Control name={'phone'} type="text" placeholder="Phone" onChange={this.updateField}
                                      value={this.state.phone}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control name={'password'} type="password" placeholder="Password" onChange={this.updateField}
                                      value={this.state.password}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Control name={'confirmPassword'} type="password" placeholder="Confirm Password"
                                      onChange={this.updateField} value={this.state.confirmPassword}
                        />
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