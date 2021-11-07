import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

function AppHeader(props) {
  return (
    <header>
      <NavLink exact activeClassName="selected" className="nav" to="/">Garden</NavLink>
      <NavLink exact activeClassName="selected" className="nav" to="/plants">Plant Catalog</NavLink>
    </header>
  );
};

export default AppHeader;