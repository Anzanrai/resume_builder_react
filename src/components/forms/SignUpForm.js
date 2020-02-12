import React, {useState} from 'react';
import {Button, Col, Form} from "react-bootstrap";

function SignUpForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    console.log(lastName);
    return(
        <div className={'form-container'}>
            <Form>
                <Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="First name" onChange={(e) => setFirstName(e.target.value)}
                                          value={firstName}/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" onChange={(e)=>setLastName(e.target.value)}
                                          value={lastName}/>
                        </Col>
                    </Form.Row>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}
                                  value={email}/>
                </Form.Group>

                <Form.Group controlId="formBasicUsername">
                    <Form.Control type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}
                                  value={username}/>
                </Form.Group>

                <Form.Group controlId="formBasicPhone">
                    <Form.Control type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)}
                                  value={phone}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}
                                  value={password}/>
                </Form.Group>

                <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Control type="password" placeholder="Confirm Password"
                                  onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign me up!
                </Button>
            </Form>
        </div>
    )
}

// class SignUpForm extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             firstName: '',
//             lastName: '',
//             email: '',
//             username: '',
//             phone: '',
//             password: '',
//             confirmPassword: ''
//         }
//     }
//
//     updateField = (e) => {
//         let fieldName = e.target.name;
//         this.setState({
//             [fieldName]: e.target.value
//         })
//     };
//
//     render() {
//         console.log(this.state);
//         return(
//             <div className={'form-container'}>
//                 <Form>
//                     <Form.Group>
//                         <Form.Row>
//                             <Col>
//                                 <Form.Control name={'firstName'} placeholder="First name" onChange={this.updateField}
//                                               value={this.state.firstName}
//                                 />
//                             </Col>
//                             <Col>
//                                 <Form.Control name={'lastName'} placeholder="Last name" onChange={this.updateField}
//                                               value={this.state.lastName}
//                                 />
//                             </Col>
//                         </Form.Row>
//                     </Form.Group>
//
//                     <Form.Group controlId="formBasicEmail">
//                         <Form.Control name={'email'} type="email" placeholder="Enter email" onChange={this.updateField}
//                                       value={this.state.email}/>
//                     </Form.Group>
//
//                     <Form.Group controlId="formBasicUsername">
//                         <Form.Control name={'username'} type="text" placeholder="Username" onChange={this.updateField}
//                                       value={this.state.username}/>
//                     </Form.Group>
//
//                     <Form.Group controlId="formBasicPhone">
//                         <Form.Control name={'phone'} type="text" placeholder="Phone" onChange={this.updateField}
//                                       value={this.state.phone}/>
//                     </Form.Group>
//
//                     <Form.Group controlId="formBasicPassword">
//                         <Form.Control name={'password'} type="password" placeholder="Password" onChange={this.updateField}
//                                       value={this.state.password}/>
//                     </Form.Group>
//
//                     <Form.Group controlId="formBasicConfirmPassword">
//                         <Form.Control name={'confirmPassword'} type="password" placeholder="Confirm Password"
//                                       onChange={this.updateField} value={this.state.confirmPassword}
//                         />
//                     </Form.Group>
//
//                     <Button variant="primary" type="submit">
//                         Sign me up!
//                     </Button>
//                 </Form>
//             </div>
//         )
//     }
// }

export default SignUpForm;