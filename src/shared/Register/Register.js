import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const { user, providerLogin, createUser } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('')

    const from = location.state?.from?.pathname || '/'

    // sign in with google 
    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from , {replace : true})
            })
            .catch(error => setError(error))
    }

    // sign in with email and password 
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, photoURL, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from , {replace : true})
            })
            .catch(e => setError(e))
    }


    return (
        <div>
            <h4>Registration</h4>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button><br></br>
                <Form.Text className="text-muted">
                    <Button onClick={handleGoogleLogin} className='mt-3' variant="outline-primary mb-2"><FaGoogle></FaGoogle> Register with google</Button>
                </Form.Text>
                <Form.Text className="text-muted">
                    <p>already have an account? <Link to='/login'>Login</Link></p>
                </Form.Text>
                <Form.Text className="text-muted">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;