import React, { useState } from 'react'
import styles from './Header.module.scss'
import { SearchIcon } from '../../icones/SearchIcon'

export const Header = () => {
  const [active, setActive] = useState(false);

  const tagglingSearch = () => {
    setActive(prev => !prev);
  }

  const [open,setOpen] = useState(false)

  const openMenu = () => {
    setOpen(prev => !prev);;
  }

  return (
    <header >
      <div className={`${styles.navLeng}`}>
        <div className='contianer'>
          <div >
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <a href="">ShopNow</a>
          </div>
          <select name="" id="">
            <option value="">English</option>
          </select>
        </div>
      </div>
      <div className={`contianer ${styles.navBar}`}>
        <h2>
          Exclusive
        </h2>
        <nav className={styles.navList}>
          <a href="">Home</a>
          <a href="">Contact</a>
          <a href="">About</a>
          <a href="">Sign Up</a>
        </nav>
        <div className={styles.globalHidding}>
          <div className={` ${styles.hidden} ${active ? styles.showen : ''}`}>
            <input type="search" placeholder='What are you looking for?' />
            <button onClick={tagglingSearch} >
              <SearchIcon width={16} height={16} />
            </button>
          </div >
          <div className={`${styles.hiddenMenu} ${ open ? styles.showenMenu : ''}`}>
            <button onClick={openMenu} className={styles.hamburger}>
              <div className={styles.numOne}></div>
              <div className={styles.numTwo}></div>
              <div className={styles.numTree}></div>
            </button>
            <div className={styles.openMenu}>
              <button onClick={openMenu} className={styles.hamburgerClose}>
                <div className={styles.numOne}></div>
                <div className={styles.numTwo}></div>
                <div className={styles.numThree}></div>
              </button>
              <nav>
                <a href="">Home</a>
                <a href="">Contact</a>
                <a href="">About</a>
                <a href="">Sign Up</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}


