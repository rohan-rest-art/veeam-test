import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'

const Navigation = () => {
  return (
    <section>
      <NavLink className={styles.link} activeClassName={styles.activeLink} to='/config'>Config</NavLink>
      <NavLink className={styles.link} activeClassName={styles.activeLink} to='/result'>Result</NavLink>
    </section>
  )
}

export default Navigation
