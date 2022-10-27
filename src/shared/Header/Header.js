import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link to="/">English-Today</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto head-links">
                        <Button className='btn btn-info'>
                            <Link to='/courses'>ALL COURSES</Link>
                        </Button>
                        <Link href="#pricing">FAQ</Link>
                        <Link href="#pricing">Blog</Link>
                        <Link href="#pricing">About</Link>
                        <Link href="#pricing">dark mode</Link>
                    </Nav>
                    <Nav className='head-links'>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <span> {user?.displayName}</span>
                                        <Button onClick={handleLogOut}>Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">

                            {user?.photoURL ?
                                <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image>
                                : <FaUserAlt></FaUserAlt>
                            }
                        </Nav.Link>
                        {/* <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;