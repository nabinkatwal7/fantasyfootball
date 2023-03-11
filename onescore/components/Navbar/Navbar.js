import Link from "next/link";
import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navba from 'react-bootstrap/Navbar';

import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

function Navbar() {
  return (
    <div>
      <Navba
        style={{ "background-color": "rgb(119 132 153 / 75%)" }}
        className="mb-5"
        fixed="top"
      >
        <Container>
          <Navba.Brand href="/">
            <SportsSoccerIcon />
            OneScore
          </Navba.Brand>
          <Nav className="navbarr me-auto navbar navbar-dark">
            <Nav.Link href="/">Live Score</Nav.Link>
            <Nav.Link href="/fantasy">Fantasy</Nav.Link>
          </Nav>
        </Container>
      </Navba>
    </div>
  );
}

export default Navbar;
