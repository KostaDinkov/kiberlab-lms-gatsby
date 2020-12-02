import React from 'react';
import logo from './Logo.png';
import {Link} from 'gatsby';

export default function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="Site logo" />
    </Link>
  )
}