import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <NavLink exact to="/" onClick={() => scrollToSection("home")} activeClassName="active-link">
        Home
      </NavLink>
      <NavLink to="/about" onClick={() => scrollToSection("about")} activeClassName="active-link">
        About
      </NavLink>
      <NavLink to="/login" onClick={() => scrollToSection("login")} activeClassName="active-link">
        Login
      </NavLink>
      <NavLink to="/G" onClick={() => scrollToSection("g")} activeClassName="active-link">
        G
      </NavLink>
    </nav>
  );
}

export default Navbar;
