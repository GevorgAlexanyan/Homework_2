import React, { useState } from 'react'
import styles from './Header.module.scss'
import { SearchIcon } from '../../icones/SearchIcon'
import { Link, NavLink } from 'react-router-dom';
import { ShopIcon } from '../../icones/ShopIcon';
import { HeartIcon } from '../../icones/HeartIcon';

export const Header = () => {
  const [active, setActive] = useState(false);

  const tagglingSearch = () => {
    setActive(prev => !prev);
  }

  const [open, setOpen] = useState(false)

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
        <Link className={styles.h2} to="/">
          Exclusive
        </Link>
        <nav className={styles.navList}>
          <NavLink to="/">Home</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>About</NavLink>
          <NavLink to='/SignUp'>Sign Up</NavLink>
        </nav>
        <div className={styles.globalHidding}>
          <div className={styles.hidden}>
            <input type="text" placeholder='What are you looking for?' />
            <button onClick={tagglingSearch} >
              <SearchIcon width={16} height={16} />
            </button>
          </div  >
          <div className={styles.carection}>
            <div className={styles.iconNav}>
              <Link to="">
                <HeartIcon width={20} height={20} />
              </Link>
              <Link to="/basket">
                <ShopIcon width={25} height={25} />
              </Link>
              <div className={`${styles.hiddenMenu} ${open ? styles.showenMenu : ''}`}>
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
                  <div className={styles.hidden_serch}>
                    <input type="text" placeholder='What are you looking for?' />
                    <button onClick={tagglingSearch} >
                      <SearchIcon width={16} height={16} />
                    </button>
                  </div  >
                  <nav >
                    <NavLink to="/">Home</NavLink>
                    <NavLink>Contact</NavLink>
                    <NavLink>About</NavLink>
                    <NavLink to='/SignUp'>Sign Up</NavLink>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}


