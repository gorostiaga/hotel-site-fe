import { NavLink } from "react-router-dom";
// import "../css/style.css";
// import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";
import "../css/nav-bar-goros.css"

function MainNavigation() {
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
                        <NavLink to="/rooms">Habitaciones y Cabañas</NavLink>
                      </li>
                      {/* <li> <a href="rooms.html">rooms</a></li> */}

                      <li className="main-nav__item">
                        <a href="about.html">About</a>
                      </li>


                      <li className="main-nav__item">
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                {/* </div>
              </div> */}
              <div>
                <div class="logo-image">
                  <a href="index.html">
                    <img src="img/logo.png" alt="Logo" />
                  </a>
                </div>
              </div>
              {/* <div class="col-xl-5 col-lg-4 d-none d-lg-block"> */}
                {/* <div class="book_room"> */}
                  <div class="sm-nav">
                    <ul className="sm-nav__items">
                      <li>
                        <a href="#">
                          <i class="fa fa-facebook-square"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                {/* </div> */}
              {/* </div> */}
              {/* <div class="col-12">
                <div class="mobile_menu d-block d-lg-none"></div>
              </div> */}
              <div class="toggle-button_container">
                <button class="toggle-button">
                  <span class="toggle-button__bar"></span>
                  <span class="toggle-button__bar"></span>
                  <span class="toggle-button__bar"></span>
                </button>
              </div>
            {/* </div>
          </div>
        </div>
      </div> */}
    </header>
  );
}

export default MainNavigation;
