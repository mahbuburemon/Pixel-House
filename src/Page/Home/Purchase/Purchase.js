import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Header from '../Shared/Header/Header';

import './Purchase.css'

const Purchase = () => {
    const { purchaseId } = useParams()
    const [productDetails, setProductDetails] = useState([]);


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();


    useEffect(() => {
        fetch(`http://localhost:5000/products/${purchaseId}`)
            .then(res => res.json())
            .then(data => setProductDetails(data))
    }, [])




    // submission client data
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert('ordered successfully')
                    reset();

                }
            })
    }

    return (

        <>
            <Header></Header>
            <div className="container ">

                <div className=" row gx-2 row-cols-md-2 row-cols-lg-2 row-cols-sm-1 ">
                    <div className="col col-md-12 col-lg-6 " >

                        <form className="d-flex flex-column m-5 p-5 bg-info gy-3" onSubmit={handleSubmit(onSubmit)}>
                            <h3 className=" m-2 p-2 fw-bold">Purchase Confirmation Form</h3>
                            {/* register your input into the hook by invoking the "register" function */}
                            <input className="m-1 p-1 rounded-2 border-2 border-info" placeholder="Name" defaultValue={user.displayName} {...register("name")} />

                            {/* include validation with required or other standard HTML validation rules */}
                            <input className="m-1 p-1 rounded-2 border-2 border-info" placeholder="Email" defaultValue={user.email} {...register("email", { required: true })} />
                            <input className="m-1 p-1 rounded-2 border-2 border-info" placeholder="Product Name" defaultValue={productDetails.name} {...register("productName", { required: true })} />
                            {/* errors will return when field validation fails  */}
                            {errors.email && <span className="error">email is required</span>}

                            <input className="m-1 p-1 rounded-2 border-2 border-info" placeholder="Address" defaultValue="" {...register("address")} required />
                            <input className="m-1 p-1 rounded-2 border-2 border-info" placeholder="City/Town" defaultValue="" {...register("city")} required />
                            <input className="m-1 p-1 rounded-2 border-2 border-info" placeholder="Phone" defaultValue="" {...register("phone")} required />

                            <input className="bg-danger m-1 p-1 rounded-2 border-2 border-info" type="submit" />
                        </form>

                    </div>
                    <div className="col p-2 col-md-12 col-lg-6">
                        <h2 className="m-3">{productDetails.name}</h2>

                        <img className="p-3" style={{ height: "260px", width: "450px" }} src={productDetails.img} alt="" />

                        <p>{productDetails.description}</p>
                        <p><span className="fw-bold">Launch: </span> {productDetails.launch}</p>
                        <p><span className="fw-bold">Price: </span> {productDetails.price}</p>
                    </div>



                </div>
                <h5 className="text-secondary p-3">Hopefully you enjoy with us.So Confirm early as possible,Thank you</h5>
            </div>
        </>
    );
};

export default Purchase;