import Logo from '../logo/logo';
import React from 'react';
import { Link } from "gatsby";
import styles from "./header.module.scss";

export default function Header() {

  return (
    <header className={styles.header}>

      <div className="image">
        <Logo/>
      </div>
      <nav className={styles.navigationMainHorizontal}>
        <ul>
          <li>
            <Link to="/">Начало</Link>
          </li>
          <li>
            <Link to="/courses">Курсове</Link>
          </li>
          <li>
            <Link to="/contact">Контакти</Link>
          </li>
          <li>
            <Link to="/signIn">Регистрация</Link>
          </li>
          <li>
            <Link to="/register">Вход</Link>
          </li>
        </ul>
      </nav>


    </header>

  )
}




