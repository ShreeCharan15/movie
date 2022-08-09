import { Navbar,NavbarBrand,Collapse,Nav, NavItem, NavLink, NavbarToggler } from "reactstrap";
import { useState } from "react";
import {Link} from 'react-router-dom'
const NavigationBar=()=>{
    const [isOpen,setIsOpen]=useState(false);
    return <Navbar color="dark" dark={true} expand="md">
        <NavbarBrand>
            <img src="/dog.jpg" height={"70px"} ></img>
            <span style={{"fontSize":"30px"}}>TCH</span>
        </NavbarBrand>
        <NavbarToggler onClick={()=>setIsOpen(!isOpen)}></NavbarToggler>
        <Collapse navbar  isOpen={isOpen}>
            <Nav className="me-auto" navbar>
            <NavItem>
                    <Link to="/">Home</Link>
                </NavItem>
                <NavItem>
                    <Link to="/about/">About</Link>
                </NavItem>
                <NavItem>
                    <Link to="/contact/">Contact</Link>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
}
export default NavigationBar;