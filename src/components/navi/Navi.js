import React, { Component } from 'react'
import {
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
  } from "reactstrap";
import CartSummary from './../cart/CartSummary';
export default class Navi extends Component {
    render() {
        return (
            <div>
                 <Navbar
          style={{
            backgroundColor: "#2942B1",
            borderBottomRightRadius: "25px",
            borderBottomLeftRadius: "25px",
          }}
          expand="md"
          dark
        >
          <NavbarBrand href="/">
            <img style={{marginLeft:"30px"}}
              src="https://64.media.tumblr.com/1a0fd177ab4a59f8cd45c64e96ba4654/96d36ccd518edab7-5b/s1280x1920/51688518014e7ded76cd7cd98170f8481d0e335c.png"
              width="200"
            ></img>
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink>
                 
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/onursercanyilmaz"
                  target="_blank"
                >
                  GitHub
                </NavLink>
              </NavItem>
              <NavItem>
          <NavLink></NavLink>
          
           
        </NavItem>
            </Nav>
            <CartSummary/>
          </Collapse>
        </Navbar>
            </div>
        )
    }
}
