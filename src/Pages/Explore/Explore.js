import React from 'react';
import { Link } from 'react-router-dom';

const Explore = ({ service }) => {

    const { id, name, price, description, img } = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h4 className="title">{name}</h4>
            <h6>Cost: {price}</h6>
            <p style={{ padding: "20px" }}>{description}</p>

            <Link to={`/bookings/${id}`}>
                <button className=" btn btn-success rounded mb-5 p-2">Book This</button>
            </Link>

        </div>
    );
};

export default Explore;