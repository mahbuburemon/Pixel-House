import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import './Review.css'

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert('review successfully')
                    reset();

                }
            })
    }
    return (
        <div className=" justify-content-center p-3 contact-form container">
            <form className="d-flex flex-column m-3 p-5 bg-dark gy-3" onSubmit={handleSubmit(onSubmit)}>
                <h3 className=" m-2 p-2 text-white fw-bold">Product-Review</h3>

                <input className="m-1 p-1 rounded-2 border-2 border-info" placeholder="" defaultValue={user.displayName} {...register("name", { required: true })} />
                <input className="m-1 p-1 rounded-2 border-2 border-info" placeholder="Email" defaultValue={user.email} {...register("email", { required: true })} />

                {/* errors will return when field validation fails  */}
                {errors.email && <span className="error">email is required</span>}

                <textarea className="m-1 p-1 rounded-2 border-2 border-info" placeholder="Review" defaultValue="" {...register("review")} required />


                <input className="bg-danger m-1 p-1 rounded-2 border-2 border-info" type="submit" />
            </form>
            <p>Thanks for your shareing......</p>
        </div>
    );
};

export default Review;