import React, { useState } from 'react'
import styles from './Header.module.scss'
import { SearchIcon } from '../../icones/SearchIcon'
import { Link, NavLink } from 'react-router-dom';
import { ShopIcon } from '../../icones/ShopIcon';
import { HeartIcon } from '../../icones/HeartIcon';
import { useForm } from 'react-hook-form';

export const Header = ({onSubmit1,onSubmit2}) => {
  const [active, setActive] = useState(false);

  const tagglingSearch = () => {
    setActive(prev => !prev);
  }

  const [open, setOpen] = useState(false)

  const openMenu = () => {
    setOpen(prev => !prev);;
  }
    const { register, handleSubmit, watch, reset, formState } = useForm({
    mode: 'onChange'
  });

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
            <form className={styles.search} onSubmit={handleSubmit(onSubmit1)}>
              <input type="text"
                placeholder='What are you looking for?'
                {...register("search1")}
              />
              <button
                type="submit"
              >
                <SearchIcon width={16} height={16} />
              </button>
            </form>
          </div  >
          <div className={styles.carection}>
            <div className={styles.iconNav}>
              <Link to="/liked">
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
                    <form className={styles.search} onSubmit={handleSubmit(onSubmit2)}>
                      <input type="text"
                        placeholder='What are you looking for?'
                        {...register("search2")}
                      />
                      <button
                        type="submit"
                      >
                        <SearchIcon width={16} height={16} />
                      </button>
                    </form>
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


