import React from 'react'
import styles from './FooterStyles.module.css'

function Footer() {

    const date = new Date().getFullYear();
  return (
    <section id="footer" className={styles.container}>
        <p>&copy; {date} Keval Ambani <br />
        All Rights Reserved</p>
    </section>
  )
}

export default Footer