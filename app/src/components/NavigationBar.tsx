import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#64b5f6" }}
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end navbar-right">
            <Nav.Link style={{ color: "white" }}>About me</Nav.Link>
            <Nav.Link style={{ color: "white" }}>
              Professional Experience
            </Nav.Link>
            <Nav.Link style={{ color: "white" }}>Skills</Nav.Link>
            <Nav.Link style={{ color: "white" }}>Hackathons</Nav.Link>
            <Nav.Link style={{ color: "white" }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
