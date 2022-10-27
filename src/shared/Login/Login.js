import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <Form className='w-50 mx-auto form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button><br></br>
            <Form.Text className="text-muted">
                <p>don't have an account? <Link to='/register'>Register</Link></p>
            </Form.Text>
            <Form.Text className="text-muted">
                error info
            </Form.Text>
        </Form>
    );
};

export default Login;