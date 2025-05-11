import React, { useEffect, useState } from 'react';
import { CartCard } from '../../components/CartCard/CartCard';
import styles from './BasketPage.module.scss'

export const BasketPage = () => {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
    setBasketItems(storedBasket);
  }, []);

  const handleQuantityChange = (index, newQuantity) => {
    const clampedQuantity = Math.max(1, Math.min(99, newQuantity));

    const updatedItems = basketItems.map((item, i) => 
      i === index ? { ...item, quantity: clampedQuantity } : item
    );

    setBasketItems(updatedItems);
    localStorage.setItem("basket", JSON.stringify(updatedItems));
  };

  const handleDeleteItem = (indexToRemove) => {
    const updatedItems = basketItems.filter((_, i) => i !== indexToRemove);
    setBasketItems(updatedItems);
    localStorage.setItem("basket", JSON.stringify(updatedItems));
  };
  


  const groupedCart = basketItems;

  
  
  const total = groupedCart.reduce((acc, el) => {
    return acc + el.quantity * el.price;
  }, 0);
  
  return (
    <div className='contianer'>
      <div className={styles.basketPageMain}>
        <div className={styles.basketPageName}>
          <h5>Product</h5>
          <h5>Price</h5>
          <h5>Quantity</h5>
          <h5>Subtotal</h5>
        </div>
        <div className={styles.basketPageFlex}>
          {groupedCart.length === 0 ? (
            <p>Your basket is empty.</p>
          ) : (
            groupedCart.map((el, i) => (
              <CartCard key={i} item={el} handleQuantityChange={handleQuantityChange}   index={i}   handleDeleteItem={handleDeleteItem}/>
            ))
          )}
        </div>
        <div className={styles.basketPageButtones}>
          <button>Return To Shop</button>
          <button>Update Cart</button>
        </div>
      </div>
      <div className={styles.managBar}>
        <div className={styles.managBarCopon}>
          <input type="text" placeholder='Coupon Code' />
          <button>Apply Coupon</button>
        </div>
        <div className={styles.managBarBill}>
          <h3>Cart Total</h3>
          <div className={styles.managBarBillInfo}>
            <div>
              <p>Subtotal:</p>
              <p>${(total).toFixed(2)}</p>
            </div>
            <hr />
            <div>
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <hr />
            <div>
              <p>Shipping:</p>
              <p>${(total).toFixed(2)}</p>
            </div>
          </div>
          <button>Procees to checkout</button>
        </div>
      </div>
    </div>
  );
};

