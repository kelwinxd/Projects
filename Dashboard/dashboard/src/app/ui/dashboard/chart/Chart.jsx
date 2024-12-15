"use client"
import React from 'react'
import styles from './Chart.module.css'

import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {

  const data = [
    { name: "sun", visit: 5, click: 17 },
    { name: "mon", visit: 61, click: 55 },
    { name: "tue", visit: 98, click: 90 },
    { name: "wed", visit: 83, click: 54 },
    { name: "thu", visit: 73, click: 96 },
    { name: "fri", visit: 47, click: 16 },
    { name: "sat", visit: 58, click: 75 }
  ]
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weeckly Recap</h2>
  <ResponsiveContainer>
    <LineChart
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
     
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip contentStyle={{backgroundColor:"#151c2c", border:"none"}} />
      <Legend />
      <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
    </LineChart>
  </ResponsiveContainer>
</div>

  )
}

export default Chart