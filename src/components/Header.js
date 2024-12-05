import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";

const Header=()=>{
  return(
     <header className="header">
      <div className="navbar">
            <div>
                <Link to="/learnhub" className="learnhub-link">LearnHub</Link>
              <Link to="/admin">Admin</Link>
            </div>
        </div>
        </header>
  );
};
export default Header;

