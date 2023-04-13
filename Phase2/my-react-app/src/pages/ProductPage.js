import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Product.css';

function ProductPage() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios
            .get('product.json')
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
    }, []);

    const handleAddToCart = (product) => {
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];

        // Check if product already exists in cart
        const existingProduct = cartData.find((item) => item.id === product.id);

        if (existingProduct) {
            // Update quantity if product already in cart
            existingProduct.quantity += 1;
        } else {
            // Add new product to cart
            cartData.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cartData));
    };

    return (
        <div className="product-container">
            <ul className="product-card">
                {product.map((product, index) => (
                    <li className="product" key={index}>
                        <div className="product-img">

                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="product-info">
                            <div class="heading">
                                <h2>{product.name}</h2></div>
                            <p>{product.description}</p>
                            <p>Rs {product.price}</p>
                            <button className="btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductPage;
