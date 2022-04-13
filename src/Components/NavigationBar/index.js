import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'

const NavigationBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <NavLink to="/posts">
              <span>
              DUMMYAPI.IO
              </span>
            </NavLink>
          </div>
          <div className={styles.column}>
            <div className={styles.row}>
              <div className={styles.column}>
                <nav className={styles.navigation}>
                  <ul>
                    <li>
                      <NavLink className={({ isActive }) => isActive ? styles.active : ''} to="/posts">
                        Posts
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className={({ isActive }) => isActive ? styles.active : ''} to="/users">
                        Users
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavigationBar