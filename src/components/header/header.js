import logo from './logo.png';
import React from 'react';
import { Link } from "gatsby";
import styles from "./header.module.scss";

export default function Header() {

  return (
    <header className={styles.header}>

      <div className="image">
        <img src={logo} alt="Site logo" />
      </div>
      <nav className={styles.navigationMainHorizontal}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Courses">Courses</Link>
          </li>
          <li>
            <Link to="/Contact">Home</Link>
          </li>
          <li>
            <Link to="/SignIn">Sign In</Link>
          </li>
          <li>
            <Link to="/Register">Join</Link>
          </li>
        </ul>
      </nav>


    </header>

  )
}




