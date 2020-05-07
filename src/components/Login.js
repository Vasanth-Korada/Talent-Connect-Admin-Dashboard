import React from 'react';
import Form from 'react-bootstrap/Form'
class Login extends React.Component{
    render(){
        return(
            <div>
            <Form>
             <Form.Group>
             <Form.Label>Enter Username</Form.Label>
             <Form.Control  type="text" placeholder="Username" />
             </Form.Group>
             <Form.Group>
             <Form.Label>Enter Password</Form.Label>
             <Form.Control type="text" placeholder="Password" />
             </Form.Group>
            </Form>
            </div>
        );
    }
}
export default Login;