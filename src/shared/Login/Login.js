import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Login.css'

const Login = () => {
    const { signIn, providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
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
                navigate(from , {replace : true})
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })

    }

    return (
        <div>
            <h4>Log In</h4>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button><br></br>
                <Form.Text className="text-muted">
                    <Button onClick={handleGoogleLogin} className='mt-3' variant="outline-primary mb-2"><FaGoogle></FaGoogle> Login with Google</Button>
                </Form.Text>
                <Form.Text className="text-muted">
                    <p>don't have an account? <Link to='/register'>Register</Link></p>
                </Form.Text>
                <Form.Text className="text-muted">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;