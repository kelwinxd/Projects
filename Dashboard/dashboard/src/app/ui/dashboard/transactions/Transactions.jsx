import React from 'react'
import styles from './Transactions.module.css'

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr className={styles.titleTable}>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.avatar}>
              <img src="./noavatar.webp" alt="" className={styles.userImg} /> Jonny Cash
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>12.05.2024</td>
            <td>$3.50</td>
          </tr>

          <tr>
            <td className={styles.avatar}>
              <img src="./noavatar.webp" alt="" className={styles.userImg} /> Jonny Cash
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>12.05.2024</td>
            <td>$3.50</td>
          </tr>

          <tr>
            <td className={styles.avatar}>
              <img src="./noavatar.webp" alt="" className={styles.userImg} /> Jonny Cash
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>12.05.2024</td>
            <td>$3.50</td>
          </tr>

          <tr>
            <td className={styles.avatar}>
              <img src="./noavatar.webp" alt="" className={styles.userImg} /> Jonny Cash
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>12.05.2024</td>
            <td>$3.50</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
