import React, { useEffect, useState } from 'react'
import { getProducts } from '../../sevices/product'
import styles from './Home.module.scss'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { Pagination } from '../../components/Pagination/Pagination'
import FilterView from '../../components/FiterView/FilterView'


export const Home = () => {
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


  useEffect(() => {
    getProducts(20, 20 * (page - 1))
      .then(data => {
        setTotalPage(Math.ceil(data.total / data.limit));
        setProducts(data.products);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
      .catch(err => console.log("Error fetching products:", err));
  }, [page]);
  const handleClick = (num) => {
    setPage(num)
  }
  const handleGridChange = (cols) => {
    setGrid(cols);
  };

  return (
    <div className={styles.dataHome}>
      <FilterView handleGridChange={handleGridChange}/>
      <div className={`contianer ${styles.cardContainer}`} style={{ gridTemplateColumns: `repeat(${grid}, 1fr)` }}>
        {products.map((e) => (
          <ProductCard key={e.id} e={e} />
        ))}
      </div>
      <Pagination page={page} total={totalPage} handleClick={handleClick} />
    </div>
  );
};
