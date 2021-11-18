import React, { useEffect, useState } from 'react';
import UsersReviewCard from '../UsersReviewCard/UsersReviewCard';
import './UsersReview.css'

const UsersReviews = (_id) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="reviewStyle">
            <h2 className="text-center p-5 " style={{ marginTop: '50px' }}>Reviews from Clients</h2>
            <div className="container">
                <div className="row">
                    {
                        reviews.map(review => <UsersReviewCard key={_id} review={review}></UsersReviewCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default UsersReviews;