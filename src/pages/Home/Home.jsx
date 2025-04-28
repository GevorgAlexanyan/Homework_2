import React, { useEffect, useState } from 'react'
import { getProducts } from '../../sevices/product'
import styles from './Home.module.scss'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import FilterView from '../../components/filterView/FilterView'
import { Pagination } from '../../components/Pagination/Pagination'


export const Home = () => {
    const [page, setPage] = useState(1)
    const [totalPage,setTotalPage] = useState(0)
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts(20, 20 * (page - 1))
        .then(data => setProducts(data.products))
        
    }, [page])
    return (
        <div className={styles.dataHome}> 
        <FilterView/>
       <ProductCard prods={products}/>
       <Pagination page={page} total={totalPage}/>
       </div>
    )
}
