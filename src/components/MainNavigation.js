import { NavLink } from "react-router-dom";
import React, { useState } from "react";
// import "../css/style.css";
// import "../css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/font-awesome.min.css";
import "../css/main-navigation.css";
import Offcanvas from "react-bootstrap/Offcanvas";

function MainNavigation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="main-header">
      {/* <div class="header-area ">
        <div id="sticky-header" class="main-header-area">
          <div class="container-fluid p-0">
            <div class="row align-items-center no-gutters"> */}
      {/* <div class="col-xl-5 col-lg-6">
                <div class="main-menu  d-none d-lg-block"> */}
      <nav className="main-nav">
        {/* <ul id="navigation"> */}
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <NavLink to="/" className="active" end>
              Home
            </NavLink>
          </li>
          {/* <li><a class="active" href="index.html">home</a></li> */}

          <li className="main-nav__item">
            <a href="#room__section">Habitaciones y Cabañas</a>
          </li>
          {/* <li> <a href="rooms.html">rooms</a></li> */}

          <li className="main-nav__item">
            <a href="#about__section">About</a>
          </li>

          <li className="main-nav__item">
            <a href="#contact__section">Contact</a>
          </li>
        </ul>
      </nav>
      {/* </div>
              </div> */}
      <div>
        <div className="logo-image">
          <a href="index.html">
            <img src="img/logo.png" alt="Logo" />
          </a>
        </div>
      </div>
      {/* <div class="col-xl-5 col-lg-4 d-none d-lg-block"> */}
      {/* <div class="book_room"> */}
      <div className="sm-nav">
        <ul className="sm-nav__items">
          <li>
            <a href="#">
              <i className="fa fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      {/* </div> */}
      {/* </div> */}
      {/* <div class="col-12">
                <div class="mobile_menu d-block d-lg-none"></div>
              </div> */}
      <div className="toggle-button_container">
        <button className="toggle-button" onClick={handleShow}>
          <span className="toggle-button__bar"></span>
          <span className="toggle-button__bar"></span>
          <span className="toggle-button__bar"></span>
        </button>
      </div>
      <Offcanvas show={show} onHide={handleClose} className="p-3 mb-2 bg-dark text-white">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column justify-content-center">
        <nav >
        <ul className="mobile-nav__items">
          <li className="mobile-nav__item">
            <a href="/" className="active">
              Home
            </a>
          </li>
          
          <li className="mobile-nav__item">
            <a href="#room__section">Habitaciones y Cabañas</a>
          </li>
          
          <li className="mobile-nav__item">
            <a href="#about__section">About</a>
          </li>

          <li className="mobile-nav__item">
            <a href="#contact__section">Contact</a>
          </li>
        </ul>
      </nav>
        </Offcanvas.Body>
      </Offcanvas>
      {/* </div>
          </div>
        </div>
      </div> */}
    </header>
  );
}

export default MainNavigation;
