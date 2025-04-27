import React from 'react'
import styles from './Footer.module.scss'
import { MessageIcon } from '../../icones/MessageIcon'
import { CIcon } from '../../icones/CIcon'
import { FacebookIcon } from '../../icones/FacebookIcon'
import { XIcon } from '../../icones/XIcon'
import { InstagranIcon } from '../../icones/InstagranIcon'
import { LinkedinIcon } from '../../icones/LinkedinIcon'

export const Footer = () => {
    return (
        <footer>
            <div className={`contianer ${styles.footerMain}`}>

                <div className={styles.exclusive}>
                    <h2>Exclusive</h2>
                    <a href="">Subscribe</a>
                    <form action="">
                        <label htmlFor="">Get 10% off your first order</label>
                        <div>
                            <input type="email" placeholder='Enter your email' />
                            <button>
                                <MessageIcon width={20} height={18} />
                            </button>
                        </div>
                    </form>
                </div>
                <div className={styles.support}>
                    <h3>Support</h3>
                    <div>
                        <a href="">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a>
                        <a href="">exclusive@gmail.com</a>
                        <a href="">+88015-88888-9999</a>
                    </div>
                </div>
                <div className={styles.account}>
                    <h3>Account</h3>
                    <div>
                        <a href="">My Account</a>
                        <a href="">Login / Register</a>
                        <a href="">Cart</a>
                        <a href="">Wishlist</a>
                        <a href="">Shop</a>
                    </div>
                </div>
                <div className={styles.quickLink}>
                    <h3>Quick Link</h3>
                    <div>
                        <a href="">Privacy Policy</a>
                        <a href="">Terms Of Use</a>
                        <a href="">FAQ</a>
                        <a href="">Contact</a>
                    </div>
                </div>
                <div className={styles.downloadApp}>
                    <h3>Download App</h3>
                    <div>
                        <p>Save $3 with App New User Only</p>
                        <div className={styles.stors}>
                            <button>
                                <img src="/imges/footerImges/Qrcode 1.png" alt="" width={80} height={80} />
                            </button>
                            <div>
                                <button>
                                    <img src="/imges/footerImges/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png" alt="" width={104} height={30}/>
                                </button>
                                <button>
                                    <img src="/imges/footerImges/download-appstore.png" alt="" width={104} height={30} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.barIcon}>
                        <FacebookIcon/>
                        <XIcon/>
                        <InstagranIcon/>
                        <LinkedinIcon/>
                    </div>
                </div>
            </div>
            <div className={styles.end}>
                <CIcon />
                <p>Copyright Rimel 2022. All right reserved</p>
            </div>
        </footer>
    )
}
