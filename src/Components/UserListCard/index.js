import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const UserListCard = ({ userId, userImg, userFirstName, userLastName, userTitle }) => {
  return (
    <div className={styles.card}>
      <Link to={`/users/${userId}`}>
        <div className={styles.cardBody}>
          <div className={`${styles.userListHeader} ${userTitle === "mr" ? styles.shadowDanger : styles.shadowWarning}`}>
            <img src={userImg} alt="User Profile" />
          </div>
          <div>
            <div className={styles.cardTitle}>
              <span className={styles.userFullName}>{userFirstName} {userLastName}</span>
              <span className={styles.userId}>Lorem ipsum dolor sit amet 🤭 consectetur, adipisicing elit 🏋️. Quibusdam 🍉 nisi voluptate veniam porro corporis sequi accusantium, minus 🐛 commodi aut. Iusto 🤣🤣🤣.</span>
              <button className={styles.button}><span>View Profile</span></button>
            </div>
          </div>
          </div>
      </Link>
    </div>
  )
}

export default UserListCard