import { DeleteIcon } from '../../icones/DeleteIcon';
import styles from './CartCard.module.scss';
import React, { useState } from 'react';

export const CartCard = ({ item }) => {

    const [quantity, setQuantity] = useState(item.quantity);

    const handleQuantityChange = (e) => {
        const newQuantity = Math.max(1, Math.min(99, Number(e.target.value)));
        setQuantity(newQuantity);
    }

    return (
        <div className={styles.cartCard}>
            <div className={styles.cartCardLook}>
                <div className={styles.cartCardLookImg}>
                    <img src={item.images[0]} alt={item.title || 'Product Image'} />
                    <button><DeleteIcon width={15} height={15} /></button>
                </div>

                <h2>{item.title}</h2>
            </div>
            <div className={styles.cartCardPriseForOne}>
                <h6>${item.price}</h6>
            </div>
            <div className={styles.cartCardQuantity}>
                <input
                    type="number"
                    value={quantity < 10 ? `0${quantity}` : quantity}
                    onChange={handleQuantityChange}
                    min={1}
                    max={99}
                    className="number-picker"
                />
            </div>
            <div className={styles.cartCardPriseForAll}>
                <h6>${(item.price * quantity).toFixed(2)}</h6>
            </div>
        </div>
    );
};
