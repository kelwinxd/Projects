import React from 'react'
import './Card.module.css'
import styles from './Card.module.css'
import { MdSuperscript, MdSupervisedUserCircle } from 'react-icons/md'

const Card = () => {
  return (
    <div className={styles.container}>
        <MdSupervisedUserCircle size={24} />
        <div className={styles.info}>
        <p>Total Users</p>
        <h2 className={styles.Number}>10928</h2>
        <p className={styles.detail}><span>2% </span>more than previous week</p>
        </div>
       

    </div>
  )
}

export default Card