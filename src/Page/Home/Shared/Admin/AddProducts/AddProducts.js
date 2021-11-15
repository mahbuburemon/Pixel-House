import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset();

                }
            })
    }

    return (
        <div className="add-products p-5">
            <h2>Please Added Products</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Name" required />
                <textarea {...register("description")} placeholder="Description" required />
                <input type="number" {...register("price")} placeholder="Price" required />
                <input type="text" {...register("launch")} placeholder="launch" required />
                <input {...register("img")} placeholder="Image-Url" required />
                <input className="bg-danger border-2 border-danger" type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;