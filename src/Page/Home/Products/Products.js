import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Header from '../Shared/Header/Header';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, [])
    return (
        <>

            <div className=" body ">


                <h2 id="products" className="p-5 fw-bold">Our Products </h2>

                <div className=" p-4 row row-cols-12 row-cols-md-6 row-cols-lg-3 g-4">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </>
    );
};

export default Products;