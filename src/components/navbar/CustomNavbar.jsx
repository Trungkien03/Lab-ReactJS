import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Film, HouseFill, TelephoneFill, Newspaper, InfoCircleFill, PersonCircle} from "react-bootstrap-icons";
import { ThemeContext } from "../../ThemeProvider";
import "./Navbar.css";

const CustomNavbar = () => {
  const { themeMode, toggleThemeMode } = useContext(ThemeContext);

  return (
    <Navbar className="text-center" fixed="top" bg={themeMode === "light" ? "light" : "dark"} variant={themeMode === "light" ? "light" : "dark"} expand="lg">
      <Navbar.Brand href="/">
        <Film className="m-1 mb-2" />
        Films Classic
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/"> <HouseFill className="mb-1"/> Home </Nav.Link>
          <Nav.Link href="/about"><InfoCircleFill className="m-1 mb-2"/>About</Nav.Link>
          <Nav.Link href="/news"><Newspaper className="m-1 mb-2"/>News</Nav.Link>
          <Nav.Link href="/contact"> <TelephoneFill className="mb-2 m-1"/> Contact</Nav.Link>
          <Nav.Link href="/portfolio"> <PersonCircle className="mb-2 m-1"/> About Me</Nav.Link>
        </Nav>
        <Button variant="outline-light" onClick={toggleThemeMode}>
          Toggle Theme
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
