import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaUserAlt, FaMoon } from 'react-icons/fa';
import logo2 from '../../logos/logo/logo2.png'

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
                <img style={{height: '20px', marginRight: '5px'}} src={logo2} alt="" srcset="" />
                <Navbar.Brand className='head-links'><Link to="/">English-Today</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto head-links">
                        <Link to='/courses'>ALL COURSES</Link>
                        <Link to='/faq'>FAQ</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/about'>About</Link>
                        <Link to="/dark">dark mode <FaMoon></FaMoon></Link>
                    </Nav>
                    <Nav className='head-links'>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <span className='m-3'> {user?.displayName}</span>
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