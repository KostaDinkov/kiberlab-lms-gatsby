import React from 'react'
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={`${styles.footer}`} >
      <span>2020 Kostadin Dinkov</span>
      <span>|</span>
      <span><a href="github.com"><i className="fa fa-github" aria-hidden="true"></i> Github страница на проекта</a></span>
      <span>|</span>
      <span><i className="fa fa-balance-scale" aria-hidden="true"></i> <a href="#">Лиценз</a></span>
    </footer>
  )
}