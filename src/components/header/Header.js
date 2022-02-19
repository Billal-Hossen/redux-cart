import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {

  const cart=useSelector(state=>state.handleCart);
  console.log(cart);
    return (
        <Navbar  sticky="top"   className='navbar navbar-expand-lg navbar-light bg-white py-2 shadow-sm'>
        <Container >
          <NavLink to="/" className='fs-4 fw-bold navbar-brand'>Nashokota</NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 mx-auto "
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink to="/" className='nav-item nav-link'>Home</NavLink>
              <NavLink to="/products" className='nav-item nav-link'>Product</NavLink>
              <NavLink to="/about" className='nav-item nav-link'>About</NavLink>
              <NavLink to="/contact" className='nav-item nav-link'>Contact</NavLink>
            </Nav>
            <div className="buttons g-2">
                <NavLink to="" className="btn btn-outline-dark">  <i class="fa fa-sign-in me-2"></i>Login</NavLink>
                <NavLink to="" className="btn btn-outline-dark ms-2 me-2"><i class="fa fa-user-plus me-2"></i>Resister</NavLink>
                <NavLink to="/cart" className="btn btn-outline-dark"><i class="fa fa-shopping-cart me-2"></i>Cart({cart.length})</NavLink>
            </div>
         
          </Navbar.Collapse>

        </Container>
      </Navbar>
    );
};

export default Header;