import React from "react";
import {BrowserRouter} from "react-router-dom";

// import Launchsuccess from "./Components/Launchsuccess.js";
function Navbar(props) {
  return (
      <div>
          <BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={{color:"white"}}>All</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style= {{style :"--bs-scroll-height: 100px;"}}>
        <li className="nav-item dropdown">
          <a style={{color:"white"}} className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filter
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a className="dropdown-item" href="/launch_success">Success Launch</a></li>
            <li><a className="dropdown-item" href="/launch_land_success">Success Launch and Land</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/year_2014">Year 2014</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</BrowserRouter>
</div>
  );
}

export default Navbar;
