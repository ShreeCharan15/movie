import { Navbar,NavbarBrand,Collapse,Nav, NavItem, NavLink, NavbarToggler } from "reactstrap";
import { useState } from "react";
const NavigationBar=()=>{
    const [isOpen,setIsOpen]=useState(false);
    return <Navbar color="dark" dark={true} expand="md">
        <NavbarBrand>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" height={"70px"} ></img>
            <span style={{"fontSize":"30px"}}>TCH</span>
        </NavbarBrand>
        <NavbarToggler onClick={()=>setIsOpen(!isOpen)}></NavbarToggler>
        <Collapse navbar  isOpen={isOpen}>
            <Nav className="me-auto" navbar>
                <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
}
export default NavigationBar;