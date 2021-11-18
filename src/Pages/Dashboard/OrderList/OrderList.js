import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './OrderList.css'

const OrderList = ({ services }) => {


    const [orderedProduct, setOrderedProduct] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch("http://localhost:5000/orderedProduct")
            .then(result => result.json())
            .then(data => {
                setOrderedProduct(data)
                console.log(data);
            })
    }, [])

    let newOrders = [];
    for (let i = 0; i < orderedProduct.length; i++) {
        if (orderedProduct[i].email === user.email) {
            newOrders[i] = orderedProduct[i];
            console.log(newOrders);
        }
    }


    return (





        <div className="container mt-3 text-center ">



            <br />
            <br />
            <h3 className="text-center">Hey! {user.displayName}! You'r orders are here</h3><br />
            {
                newOrders.length === 0 &&
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden"></span>
                </div>
            }
            {
                <table className="table ordersTable">
                    <thead>
                        <tr className="bg-primary">
                            <th>Cycle Model</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderedProduct.map(pd =>
                            user.email === pd.email && <tr>
                                <td>{pd.name}</td>
                                <td>${pd.price}</td>
                                <td>{pd.date}</td>
                                <td>{pd.email}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            }
        </div>




    );
};

export default OrderList;