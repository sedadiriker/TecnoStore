import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Menu.css"
import { useState,useEffect } from "react";

function Menu() {
  const expand = "lg";
  const [changeColor,setChangeColor] = useState(false)

 useEffect(() => {
  const handleScroll = () => {
    setChangeColor(window.pageYOffset > 60)
  }
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
 })
  return (
    <>
      <Navbar expand={expand} className={`navbar mb-3 px-3 ${changeColor ? 'navbar-changeColor' : ''}`}>
        <Container fluid>
          <Navbar.Brand href="#">
            <img className="image" src="/images/logo.webp" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle className="text-danger" aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            
          >
            <Offcanvas.Header closeButton className=" bg-body-secondary">
              <Offcanvas.Title className="fs-2 text-danger" id={`offcanvasNavbarLabel-expand-${expand}`}>
                TecnoStorea
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 gap-5">
              <NavLink className={`${changeColor ? 'scroll-nav' : ''} nav text-decoration-none fs-3`} to="/">Home</NavLink>

                <NavLink className={`${changeColor ? 'scroll-nav' : ''} nav text-decoration-none fs-3`} to="/addTecnoProduct">Add New Product </NavLink>
                <NavLink className={`${changeColor ? 'scroll-nav' : ''} nav text-decoration-none fs-3`} to="/tecnoProductList">Tecno Product List</NavLink>
                <NavLink className={`${changeColor ? 'scroll-nav' : ''} nav text-decoration-none fs-3`} to="/contact">Contact </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
