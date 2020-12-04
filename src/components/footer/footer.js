import React from 'react'
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={`${styles.footer}`} >
      <span>2020 Kostadin Dinkov</span>
      <span>|</span>
      <span><a href="https://github.com/KostaDinkov/kiberlab-lms-gatsby"><i className="fa fa-github" aria-hidden="true"></i> Github страница на проекта</a></span>
      <span>|</span>
      <span><i className="fa fa-balance-scale" aria-hidden="true"></i> <a href="https://github.com/KostaDinkov/kiberlab-lms-gatsby/blob/master/LICENSE">Лиценз</a></span>
      <span>|</span>
      <span><i className="fa fa-eye-slash" aria-hidden="true"></i> <a href="/cookies">Политика за Бисквитките</a></span>
    </footer>
  )
}