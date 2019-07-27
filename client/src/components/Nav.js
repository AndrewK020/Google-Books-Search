import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <p className="nav">Google Books</p>
      <a className="navbar-brand" href="/">Search</a>
      <a className="navbar-brand" href="/saved">Saved</a>
    </nav>
  );
}

export default Nav;
