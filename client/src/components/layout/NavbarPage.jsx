import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar } from 'react-bootstrap';
import { connect } from "react-redux"
import { logout } from "../action/authAction"
import { clearContacts } from "../action/contactsAction"






const NavbarPage = ({ icon, title, auth: { user, isAuthenticated }, logout,clearContacts }) => {

    const onLogout = () => {
        logout();
        clearContacts();

    };

    const authLinks = (
        <Nav>
            <Nav.Link>Hello {user && user.name}</Nav.Link>
            <Nav.Link
                 onClick={onLogout} to="/about">
                    {' '}
                    Logout
                
            </Nav.Link>
        </Nav>
    );


    return (
        <div>
            <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark" fixed="top">
                <h1 style={{ marginRight: "10px", color: "white" }}><i className={icon}></i></h1>
                <Navbar.Brand style={{ fontSize: "24px" }} href="/">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div style={{ flex: 1 }}></div>

                    <Nav className="mr-auto">
                        {isAuthenticated ? authLinks : (
                            <Nav className="mr-auto">
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/register">Register</Nav.Link>
                        
                            </Nav>
                        )}
                    </Nav>

                </Navbar.Collapse>
            </Navbar>


        </div>
    );

}

NavbarPage.defaultProps = {
    title: "Contact List",
    icon: "fas fa-id-card-alt"

}
NavbarPage.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired

}



const mapStateToProps = state => ({
    alerts: state.alerts,
    auth: state.authentication
})

export default connect(mapStateToProps, { logout,clearContacts })(NavbarPage);