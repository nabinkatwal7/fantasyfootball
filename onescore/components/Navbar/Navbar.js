import Link from "next/link";
import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navba from 'react-bootstrap/Navbar';

import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import NfcIcon from "@mui/icons-material/Nfc";

function Navbar() {
  return (
    <div>
      <Navba fixed="top" bg="primary" variant="dark">
        <Container>
          <Navba.Brand href="/">
            <SportsSoccerIcon />
            OneScore
          </Navba.Brand>
          <Nav className="navbarr me-auto navbar navbar-dark bg-primary">
            <Nav.Link href="/">Live Score</Nav.Link>
            <Nav.Link href="/fantasy">Fantasy</Nav.Link>
          </Nav>
        </Container>
      </Navba>
    </div>
  );
}

export default Navbar;
