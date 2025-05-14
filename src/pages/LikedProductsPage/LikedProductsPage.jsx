import React, { useContext } from 'react';
import { LikeContext } from '../../components/LikeContext/LikeContext';
import styles from './LikedProductsPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { GarbageIcon } from '../../icones/GarbageIcon';
import { ProductCard } from '../../components/ProductCard/ProductCard';

export const LikedProductsPage = () => {
  const { likedItems, toggleLike } = useContext(LikeContext);
  const navigate = useNavigate();

  return (
    <div className={`contianer`}>
      <h1>Liked Products</h1>
      {likedItems.length === 0 ? (
        <p>You have no liked products.</p>
      ) :
        <div className={styles.likedItems}>
          {likedItems.map((item) =>
          <ProductCard key={item.id} e={item} icon={<GarbageIcon width={16} height={16}/>}/>
          )}
        </div>
      }
    </div>
  )
};
