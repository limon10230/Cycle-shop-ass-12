import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageProduct = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])



    return (
        <div className="container p-3 text-center">
            <br />
            <br />


            <h1 className="mt-3 mb-3 text-left">Manage All Products</h1>
            {
                services.length === 0 &&
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden"></span>
                </div>
            }
            <table className="table productTable">
                <thead>
                    <tr className="bg-primary">
                        <th>Cycle Model</th>

                        <th>Price</th>

                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map(pd =>

                        <tr>
                            <td>{pd.name}</td>

                            <td>${pd.price}</td>

                            <td><button className="btn btn-success">Edit</button> <button className="btn btn-danger" >Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    );
};

export default ManageProduct;