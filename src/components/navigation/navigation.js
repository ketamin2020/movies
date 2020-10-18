import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "../navigation/navigation.module.css";

export default class Navigation extends Component {
  render() {
    return (
      <ul className={styles.linkList}>
        <li>
          <NavLink
            exact
            to="/"
            className={styles.navLink}
            activeClassName={styles.activeLink}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={styles.navLink}
            activeClassName={styles.activeLink}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    );
  }
}
