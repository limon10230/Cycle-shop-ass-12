import React from 'react';
import Rating from 'react-rating';
import useAuth from '../../../hooks/useAuth';


const UsersReviewCard = ({ review }) => {
    // console.log(review.user.photoURL);
    const { user } = useAuth();
    //console.log(review);

    return (
        <div className="col-md-4 " style={{marginBottom: '80px'}}>
            <div className="card text-center" style={{ height: '350px' }}>
                <div className="p-3">
                    <img className="rounded-pill" src={review.user.photoURL} style={{ height: '100px', width: '100px' }} alt="" />
                </div>
                <Rating style={{color:"goldenrod"}}
                    initialRating={review?.rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <div className="card-body">
                    <h4>{review.name}</h4>
                    <h5 className="text-secondary">{review.designation}</h5>
                    <p className="text-secondary">{review.description}</p>
                   

                </div>
            </div>
        </div>
    );
};

export default UsersReviewCard;