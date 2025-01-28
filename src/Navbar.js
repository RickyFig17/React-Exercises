import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tictactoe">Tic Tac Toe</Link>
            </li>
            <li>
              <Link to="/thinkinginreact">Produce List</Link>
            </li>
            <li>
              <Link to="/datadisplay">Profile</Link>
            </li>
            <li>
              <Link to="/aboutpage">About</Link>
            </li>
            <li>
              <Link to="/todolist">Todo List</Link>
            </li>
          </ul>
        </nav>
    </>
  );
}

export default Navbar;
