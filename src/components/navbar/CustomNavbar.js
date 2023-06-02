import React, { useContext } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Film, PersonFill, Search } from "react-bootstrap-icons";
import useThemeMode from "../../UseTheme";
import { ThemeContext } from "../../ThemeProvider";
import "./Navbar.css";

const CustomNavbar = () => {
  const { themeMode, toggleThemeMode } = useContext(ThemeContext);

  return (
    <Navbar bg={themeMode === "light" ? "light" : "dark"} variant={themeMode === "light" ? "light" : "dark"} expand="lg">
      <Navbar.Brand href="#home">
        <Film className="mr-2" />
        Films Classic
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#films">Phim Bộ</Nav.Link>
          <Nav.Link href="#about">Phim Lẻ</Nav.Link>
          <Nav.Link href="#service">Thể Loại</Nav.Link>
          <Nav.Link href="#contact">Quốc Gia</Nav.Link>
        </Nav>
        <Form inline className="ml-2">
          <FormControl
            type="text"
            placeholder="Tìm kiếm phim..."
            className="mr-sm-2"
          />
        </Form>
        <Button variant="outline-light" className="search-button">
          <Search />
        </Button>
        <Button variant="outline-light">
          <PersonFill className="mr-2" />
          Đăng Nhập
        </Button>
        <Button variant="outline-light" onClick={toggleThemeMode}>
          Toggle Theme
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
