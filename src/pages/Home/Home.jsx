import React, { useEffect, useState } from 'react'
import {  searchProducts } from '../../sevices/product'
import styles from './Home.module.scss'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { Pagination } from '../../components/Pagination/Pagination'
import FilterView from '../../components/FiterView/FilterView'
import { LikeIcon } from '../../icones/LikeIcon'


export const Home = ({ filterData }) => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [grid, setGrid] = useState(4);

  useEffect(() => {
    const checkScreen = () => {
      if (window.matchMedia('(max-width: 600px)').matches) {
        setGrid(2);
      } else if (window.matchMedia('(max-width: 900px)').matches) {
        setGrid(3);
      } else {
        setGrid(4);
      }
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);


  const [filteredProductsNew, setFilteredProducts] = useState([])

  useEffect(() => {
    searchProducts(filterData, 20, 20 * (page - 1))
      .then(data => {
        setTotalPage(Math.ceil(data.total / 20));
        setProducts(data.products);
        setFilteredProducts(data.products)
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
      .catch(err => console.log("Error fetching products:", err));
  }, [page, filterData]);


  const handleClick = (num) => {
    setPage(num)
  }
  const handleGridChange = (cols) => {
    setGrid(cols);
  };
  return (
    <div className={styles.dataHome}>
      <FilterView handleGridChange={handleGridChange} />
      <div className={`contianer ${styles.cardContainer}`} style={{ gridTemplateColumns: `repeat(${grid}, 1fr)` }}>
        {filteredProductsNew.map((e) => (
          <ProductCard key={e.id} e={e} icon={<LikeIcon width={16} height={14} />}  />
        ))} 
      </div>
      <Pagination page={page} total={totalPage} handleClick={handleClick} />
    </div>
  );
};
