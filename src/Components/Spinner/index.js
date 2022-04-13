import React from 'react'
import styles from './styles.module.css'

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.ldsRoller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>  
      </div>
    </div>
  )
}

export default Spinner