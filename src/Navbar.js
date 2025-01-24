import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <a href="#">
        <Link to="/thinkingreact">
          <button>
            <h1>Thinking in React</h1>
          </button>
        </Link>
      </a>
    </>
  );
}

export default Navbar;
