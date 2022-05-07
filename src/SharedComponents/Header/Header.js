import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {


    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link}
                        to="home">Motorcycle Paradise</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className='mx-2' as={Link}
                                to="home">Home</Nav.Link>
                            <Nav.Link className='mx-2' as={Link} to="about">About</Nav.Link>
                            <Nav.Link className='mx-2' as={Link} to="blogs">Blogs</Nav.Link>
                            {
                                user && <NavDropdown title="Manage Inventory" id="collasible-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="inventory">Manage All products</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="addProducts">Add Items</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="myItems">My Items</NavDropdown.Item>
                                </NavDropdown>
                            }
                        </Nav>
                        <Nav>
                            {user ?
                                <button className='btn btn-primary' onClick={logout}>Sign out</button> :
                                <Nav.Link className='mx-2' as={Link} to="login">
                                    Login
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Toaster></Toaster>
        </div>
    );
};

export default Header;