import React, { useEffect, useState } from 'react';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { CartCard } from '../../components/CartCard/CartCard';

export const BasketPage = () => {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
    setBasketItems(storedBasket);
  }, []);

  const groupedCart = []

  basketItems.forEach(item => {
  const existingItem = groupedCart.find((i) => i.id === item.id);
  if(existingItem){
    existingItem.quantity += 1;
  }else{
    groupedCart.push({...item, quantity: 1})
  }
})



return (
  <div>
    {groupedCart.length === 0 ? (
      <p>Your basket is empty.</p>
    ) : (
      groupedCart.map((el, i) => (
        <CartCard key={i} item={el} />
      ))
    )}
  </div>
);
};

