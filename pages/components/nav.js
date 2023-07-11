import React from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <img src="/svg/logo.svg" />
      </div>
      <ul className={styles.navbarLinks}>
        <li>
          <Link href="/">products</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/">connect</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
