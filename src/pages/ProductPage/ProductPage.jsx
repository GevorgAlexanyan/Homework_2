import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../sevices/product';
import styles from './ProductPage.module.scss'

export const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
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
        <div>
            <div className={styles.imgMain}>
                <button onClick={selectOptionChangeNegative}>‹</button>
                <div className={styles.imgRout}>
                    {product.images.map((el, i) => (
                        <div key={i}>
                            <img src={el} alt=''
                            style={{ opacity: selected ? 1 : 0 ,
                            transition: 'opacity 0.3s ease'
                            }} />
                        </div>
                    ))}
                </div>
                <button onClick={selectOptionChangePositive}>›</button>
            </div>



            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
}
