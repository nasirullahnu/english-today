import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">English-Today</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto head-links">
                        <Button className='btn btn-info'>
                            <Link href="#features">ALL COURSES</Link>
                        </Button>
                        <Link href="#pricing">FAQ</Link>
                        <Link href="#pricing">Blog</Link>
                        <Link href="#pricing">About</Link>
                        <Link href="#pricing">dark mode</Link>
                    </Nav>
                    <Nav className='head-links'>
                        <Link href="#deets">More deets</Link>
                        <Link eventKey={2} href="#memes">
                            Dank memes
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;