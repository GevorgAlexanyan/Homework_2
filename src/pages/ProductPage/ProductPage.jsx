import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../sevices/product';

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
    if (!product) {
        return <p>Loading product...</p>; 
    }
    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
}
