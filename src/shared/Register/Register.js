import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const {user, providerLogin} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => console.error(error))
    }

    return (
        <Form className='w-50 mx-auto form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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
                error info
            </Form.Text>
        </Form>
    );
};

export default Register;