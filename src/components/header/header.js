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
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/signIn">Sign In</Link>
          </li>
          <li>
            <Link to="/register">Join</Link>
          </li>
        </ul>
      </nav>


    </header>

  )
}




