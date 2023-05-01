import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const NavigationBar = () => {
    const {user} = useContext(AuthContext)
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="" variant="">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='text-decoration-none text-black' to="/category/0">Home</Link>
                            <Link className='text-decoration-none mx-2 text-black' to="/about">About</Link>
                            <Link className='text-decoration-none text-black' to="/career">Career</Link>

                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            {user &&
                                <FaUserCircle
                                    style={{ fontSize: '1.7rem' }}></FaUserCircle>}

                            {user ?
                            <Button variant="dark">Logout</Button> :
                                <Link to='/login'><Button variant="dark">Login</Button></Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;