import React from "react";
import { Link } from "react-router-dom";
import menu from "./icons/menu.png";

const Navbar = () => {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  };
  const closeCanvas = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };
  return (
    <nav className="d-flex justify-content-between align-items-center py-2">
      <div className="navbar-logo">
        <img
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
          src="https://avatars.mds.yandex.net/i?id=39d336b6d514920c532d407c00e756b9-5213237-images-thumbs&n=13"
          alt=""
        />
      </div>

      <ul className="d-none d-md-flex d-lg-flex d-flex list-unstyled align-items-center awesome-navbar mb-0">
        <li>
          <Link to="/home">Asosiy</Link>
        </li>
        <li>
          <Link to="/phone">Telefonlar</Link>
        </li>
        <li>
          <Link to="/notebook">Noutbuklar</Link>
        </li>
      </ul>
      <button
        className="d-block d-md-none btn btn-primary d-flex justify-content-center align-items-center"
        onClick={openNav}
      >
        <img style={{ width: "20px", height: "20px" }} src={menu} alt="" />
      </button>
      <div id="mySidenav" className="sidenav">
        <span onClick={closeCanvas} className="closebtn">
          &times;
        </span>
        <Link to="/home" onClick={closeCanvas}>
          Asosiy
        </Link>
        <Link to="/phone" onClick={closeCanvas}>
          Telefonlar
        </Link>
        <Link to="/notebook" onClick={closeCanvas}>
          Noutbuklar
        </Link>
        <Link to="/">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
