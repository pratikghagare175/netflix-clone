import { React, useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src={`${process.env.PUBLIC_URL}/images/netflix_logo.png`}
        alt="Netflix Logo"
        className="nav__logo"
      />
      <img
        src={`${process.env.PUBLIC_URL}/images/profile.png`}
        alt="Avatar"
        className="nav__avatar"
      />
    </div>
  );
}

export default Nav;
