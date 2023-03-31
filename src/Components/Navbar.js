import React from "react";
import "./Components.css";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Jobs Finder
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a class="nav-link" href="berlin">
                Berlin
              </a>
              <a class="nav-link" href="frankfurt">
                Frankfurt
              </a>
              <a class="nav-link" href="munich">
                Munich
              </a>
              <a class="nav-link" href="dusseldorf">
                Dusseldorf
              </a>
              <a class="nav-link" href="remote">
                Remote
              </a>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Navbar;
