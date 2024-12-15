import React from 'react'
import styles from './sidebar.module.css'
import { MdDns,MdSupervisedUserCircle,MdShoppingBag,MdAttachMoney,MdWork,MdAnalytics,MdPeople,MdOutlineSettings,MdHelpCenter,MdDashboard, Mdlogout, MdArrowBack } from "react-icons/md";
import MenuLink from './MenuLinks/menuLink';

const menuItems = [
  {
      title: "Pages",
      list: [
          {
              title: "Dashboard",
              path: "/dash",
              icon: <MdDashboard />
          },
          {
              title: "Users",
              path: "/dash/users",
              icon: <MdSupervisedUserCircle />
          },
          {
              title: "Products",
              path: "/dash/products",
              icon: <MdShoppingBag />
          },
          {
              title: "Transactions",
              path: "/dash/transactions",
              icon: <MdAttachMoney />
          }
      ]
  },
  {
    title:'Analytics',
    list: [
      {
        title:"Revenue",
        path:"/dash/revenue",
        icon:<MdWork />,
      },
      {
        title:"Reports",
        path:"/dash/reports",
        icon:<MdWork />,
      },
      {
        title:"Teams",
        path:"/dash/teams",
        icon:<MdPeople />,
      },
    ]
  },
  {
    title:'User',
    list: [
      {
        title:"Settings",
        path:"/dash/settings",
        icon:<MdOutlineSettings />,
      },
      {
        title:"Help",
        path:"/dash/help",
        icon:<MdHelpCenter />,
      },
   
    ]
  }
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <img src="./noavatar.webp" alt="" />
        <div className={styles.userDetail}>
          <p className={styles.userName}>Kelwin Regis</p>
          <p className={styles.userTitle}>Software Engineer</p>

        </div>
      </div>
      <ul className={styles.list}>

     
      {menuItems.map(item=> (
        <li key={item.title}>
          <span>{item.title}</span>
          {item.list.map((i) => (
            <MenuLink item={i} key={i.title}/>
          ))}
        </li>
      ))}
       </ul>
       <button className={styles.logout}>

          <MdArrowBack />   Logout
        </button>
    </div>
  )
}

export default Sidebar