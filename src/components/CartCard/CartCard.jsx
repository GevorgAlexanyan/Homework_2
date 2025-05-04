import styles from './CartCard.module.scss'
import React from 'react'

export const CartCard = ({item}) => {
    return (
        <div>
            <div className={styles.cartCardLook}>
                <img src={item.imeges} alt="" />
                <h2>{item.name}</h2>
            </div>
            <div className={styles.cartCardPriseForOne}>
                {item.price}
            </div>
            <div className={styles.cartCardQuantity}>
                {item.quantity}
            </div>
            <div className={styles.cartCardPriseForAll}>
                       
            </div>
        </div>
    )
}
