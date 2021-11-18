import React from 'react';
import {  Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'
import { Box } from '@mui/system';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className="header-container" >
            <Navbar variant="dark" fixed="top"  collapseOnSelect expand="lg " className="navbar" >
                <Container>
                    <Navbar.Brand className="logo" href="/home">Cycle-Yos </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="nav-link" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="nav-link" as={HashLink} to="/dashboard">Dashboard</Nav.Link>
                        {/* <Nav.Link className="nav-link" as={HashLink} to="/addService">Add service</Nav.Link> */}
                       
                       
                        <Nav.Link className="nav-link" as={HashLink} to="/explore">Explore</Nav.Link>
                    


                       
                  
                        
                        
                         {user?.email ?
                            <Button onClick={logout}  variant="light" className="logout">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                           <a className="user-name" href="#login">{user?.displayName}</a>
                        </Navbar.Text> 
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;