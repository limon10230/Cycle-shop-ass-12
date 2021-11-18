import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { UserContext } from './../../../App';

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            designation: data.designation,
            description: data.description,
            rating: data.rating
        };
        const newData = { user, ...eventData }
        console.log(newData);
        const url = `http://localhost:5000/usersReview`;


        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => {
                console.log('server side response', res);
                alert("Review send successfully")
            });
    }

    return (
        <div className="mt-5 p-5 mx-auto" style={{ backgroundColor: '', width: '600px', borderRadius: '30px' }}>
            <h1 className="text-white mb-3">Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" className="mr-5 form-control w-75" placeholder="Your Name" {...register('name')} />
                <br /> <input name="designation" className="mr-5 form-control w-75" placeholder=" Your Position" {...register('designation')} />
                <br /> <textarea type="text-area" name="description" className="mr-5 form-control w-75" placeholder="Description" {...register('description')} />
                <input name="rating" type="text" className="mr-5 form-control w-75" placeholder="Input your Rating number" {...register('rating')} />
                <br /> <input className="btn btn-success btn-lg" type="submit" />
            </form>
        </div>
    );
};

export default Review;