import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    
    const {_id, name,price, description, img } = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h4 className="title">{name}</h4>
            <h6>Cost: {price}</h6>
            <p style={{ padding: "20px" }}>{description}</p>
            
            <Link to={`/bookings/${_id}`}>
                <button className=" btn btn-success rounded mb-5 p-2">Buy This</button>
            </Link>
           
        </div>
    );
};

export default Service;