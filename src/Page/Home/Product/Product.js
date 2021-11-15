import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const { _id, name, description, launch, price, img } = props.product

    return (
        <div>
            <div className="service">
                <div className="col package">
                    <div className="card">
                        <img style={{ width: '100%', height: '250px' }} src={img} className="card-img-top " alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><span className="border-2 fw-bold ">Launch: </span> {launch}</p>
                            <p className="card-text"><span className="border-2 fw-bold ">Price: </span> {price}</p>

                            <Link to={`/purchase/${_id}`}>
                                <button className="btn btn-info rounded-2"
                                >Purchase  Now</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;