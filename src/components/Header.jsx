import React from 'react'
import styles from './Header.module.css'


function Header() {
  return (
    <div className={styles.headerblock}>
        <h1 className={styles.h1}>Emoji Finder</h1>
        <p className={styles.p}>Find emoji by keywords</p>
    </div>
  )
}

export default Header