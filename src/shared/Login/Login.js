import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Login.css'

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const [error, setError] = useState('')

    // log in with email and password 
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        signIn(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            form.reset()
            setError('')
            navigate('/')
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })

    }

    return (
        <Form onSubmit={handleSubmit} className='w-50 mx-auto form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button><br></br>
            <Form.Text className="text-muted">
                <p>don't have an account? <Link to='/register'>Register</Link></p>
            </Form.Text>
            <Form.Text className="text-muted">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Login;