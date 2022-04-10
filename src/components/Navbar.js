import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* <section className="navbar-bg"> */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              GeeksForGeeks
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink class="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/About">
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/Team">
                    Team
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/Blogs">
                    Blogs
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/Events">
                    Events
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/Contact">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
      {/* </section> */}
    </>
  );
};

export default Navbar;