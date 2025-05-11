import React, { useState } from 'react';
import styles from './ProductCard.module.scss';
import { ShopIcon } from '../../icones/ShopIcon';
import { StarIcon } from '../../icones/StarIcon';
import { EmptyStarIcon } from '../../icones/EmptyStarIcon';
import { useNavigate } from 'react-router-dom';


export const ProductCard = ({ e }) => {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  const basketArreyAdd = (item) => {
    const currentBasket = JSON.parse(localStorage.getItem("basket")) || [];
  
    const existingItemIndex = currentBasket.findIndex((i) => i.id === item.id);
  
    if (existingItemIndex !== -1) {
      currentBasket[existingItemIndex].quantity =
        (currentBasket[existingItemIndex].quantity || 1) + 1;
    } else {
      currentBasket.push({ ...item, quantity: 1 });
    }
  
    localStorage.setItem("basket", JSON.stringify(currentBasket));
  };
  



  
  return (

    <div className={styles.card} key={e.id} onClick={() => navigate(`/product/${e.id}`)}>
      <div className={styles.divImg}>
        {loading ? <div className={styles.loading}></div> : <></>}
        <img onLoad={() => setLoading(false)} style={{ opacity: loading ? "0" : "1" }} src={`${e.images[0]}`} alt="" />
        <button className={styles.add}
          onClick={(event) => { 
            event.stopPropagation()
            basketArreyAdd(e) }}>
          <ShopIcon width={24} height={24} /> <span> Add To Cart </span>
        </button>
      </div>
      <div className={styles.priceName}>
        <h2>
          {e.title}
        </h2>
        <span>
          {`${e.price}$`}
        </span>
        <div className={styles.rating}>
          {Array.from({ length: Math.round(e.rating) }).map((_, index) => (
            <span key={`full-${index}`} className={styles.fullStar}>
              <StarIcon />
            </span>
          ))}
          {Array.from({ length: 5 - Math.round(e.rating) }).map((_, index) => (
            <span key={`empty-${index}`} className={styles.emptyStar}>
              <EmptyStarIcon />
            </span>
          ))}
          <span className={styles.reviewCount}>{`(${e.stock})`}</span>
        </div>

      </div>
    </div >
  );
};

