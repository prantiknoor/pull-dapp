import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="div-header">
        <div id="logo">Pull DAPP</div>
        <div>
          <Link to="/create-pull">
            <button className="blue-button">Create new pull</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
