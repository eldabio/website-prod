import React from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>My Logo</div>
      <ul className={styles.navbarLinks}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;