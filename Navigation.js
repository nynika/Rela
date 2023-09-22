import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export class Navigation extends Component {

    render() {
        return (
            <Navbar >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Nav className="nav flex-column">


                    <NavLink className="nav_navlink nav_navlink_aside" to="/Item">
                        Item master
                    </NavLink>


                    <NavLink className="nav_navlink nav_navlink_aside" to="/uom">
                        UOM
                    </NavLink>

                    <NavLink className="nav_navlink nav_navlink_aside" to="/vendor1Evl">
                        Vendor Evaluation
                    </NavLink>


                    <NavLink className="nav_navlink nav_navlink_aside" to="/itemtrans">
                        Item trans
                    </NavLink>


                      
                <NavLink className="nav_navlink nav_navlink_aside" to="/pincode">
                 pincode
                </NavLink> 




                </Nav>

            </Navbar>
        )
    }
}


