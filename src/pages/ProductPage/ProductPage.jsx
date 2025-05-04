import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../sevices/product';
import styles from './ProductPage.module.scss'
import { info } from 'sass';
import { StarIcon } from '../../icones/StarIcon';
import { EmptyStarIcon } from '../../icones/EmptyStarIcon';

export const ProductPage = () => {
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    console.log(product)
    useEffect(() => {
        getProductById(id)
            .then(data => {
                setProduct(data);
            })
            .catch(err => console.log("Error fetching product:", err));
    }, [id]);

    const [selected, setSelected] = useState(false);



    const [selectOption, setSelectOption] = useState(0);

    const selectOptionChangePositive = () => {
        if (selectOption === product.images.length - 1) {
            setSelectOption(0);
        } else {
            setSelectOption(selectOption + 1);
        }
    };

    const selectOptionChangeNegative = () => {
        if (selectOption === 0) {
            setSelectOption(product.images.length - 1);
        } else {
            setSelectOption(selectOption - 1);
        }
    };
    useEffect(() => {

    }, [selectOption]);

    if (!product) {
        return <p>Loading product...</p>;
    }
    return (
        <div className='contianer'>
            <div className={` ${styles.mainInfo}`}>
                <div className={styles.imgMain}>
                    {product.images.length <= 1 ? <></> : <button onClick={selectOptionChangeNegative} >‹</button>}
                    <div className={styles.imgRout}>
                        {loading ? <div className={styles.loading}></div> : <></>}
                        {product.images.map((el, i) => (
                            <img
                                key={i}
                                src={el} alt=''
                                onLoad={() => setLoading(false)}
                                style={{
                                    opacity: loading ? 0 : (selectOption === i ? 1 : 0),
                                    transition: 'opacity 0.3s ease'
                                }} />
                        ))}
                    </div>
                    {product.images.length <= 1 ? <></> : <button onClick={selectOptionChangePositive}>›</button>}
                </div>
                <div className={styles.infoMain}>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <div className={styles.retPrice}>
                        <div className={styles.peiceOldNew}>
                            <div className={styles.priceOld}>
                                <b>Old price:</b>
                                <span style={{
                                    textDecoration: 'line-through',
                                    color: `rgba(219, 68, 68, 1)`
                                }}>
                                    ${product.price}</span>
                            </div>
                            <div className={styles.priceNew}>
                                <b>New price:</b>
                                <span
                                    style={{ color: `rgba(0, 0, 0, 1)` }}
                                > ${product.price * (1 - product.discountPercentage * 0.01)}</span>
                            </div>
                            <div className={styles.percent}>{product.discountPercentage}%</div>
                        </div>
                        <div className={styles.rating}>
                            {Array.from({ length: Math.round(product.rating) }).map((_, index) => (
                                <span key={`full-${index}`} className={styles.fullStar}>
                                    <StarIcon />
                                </span>
                            ))}
                            {Array.from({ length: 5 - Math.round(product.rating) }).map((_, index) => (
                                <span key={`empty-${index}`} className={styles.emptyStar}>
                                    <EmptyStarIcon />
                                </span>
                            ))}
                            <span className={styles.reviewCount}>{`(${product.stock})`}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.info}>
                <div>
                    <b>Brend:</b><span>{product.brand}</span>
                </div>
                <div>
                    <b>Category:</b><span>{product.category}</span>
                </div>
                <div>
                    <b>Warranty:</b><span>{product.warrantyInformation}</span>
                </div>
                <div>
                    <b>Weight:</b><span>{product.weight} kg</span>
                </div>
                <div>
                    <b>Minimum Order:</b><span>{product.minimumOrderQuantity}</span>
                </div>
                <div>
                    <b>Shipping:</b><span>{product.shippingInformation}</span>
                </div>
            </div>


        </div >
    );
}
