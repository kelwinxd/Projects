"use client"
import Link from 'next/link'
import React from 'react'
import styles from './menuLink.module.css'
import { usePathname } from 'next/navigation'

const MenuLink = ({item}) => {

  let pathname = usePathname()
  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
        
        {item.icon} {item.title}
        
        
        </Link>
  )
}

export default MenuLink