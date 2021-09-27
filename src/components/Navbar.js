import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

export default const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">TaskManager</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>

            <NavItem>
              <NavLink tag={Link} to="/tasks">Tasks</NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/logout">Logout</NavLink>
            </NavItem>

          </Nav>
          <NavbarText>TaskManager</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar