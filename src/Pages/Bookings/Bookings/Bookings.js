import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Bookings.css'

const Bookings = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);


    useEffect(() => {


        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const handleProductOrder = (data) => {
        console.log('Order submitted');
        const orderDetails = { ...user, ...services, date: new Date() }
        console.log(orderDetails);
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log('server side response', data);
                alert('Order placed successfully');
            });

    }


    return (


        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <br />



            <form className="form-control w-50 mx-auto">

                <div className="container mt-3">
                    <h1>Orders Form</h1><br />
                    <table class="table caption-top">
                        <thead>
                            <tr>
                                <th scope="col">Drone Model</th>

                                <th scope="col">Price</th>



                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>{services.name}</td>

                                <td>${services.price}</td>



                            </tr>
                            <tr>
                                <th colspan="2">Total</th>
                                <th>${services.price}</th>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <input type="text" name="name" id="" defaultValue={user.displayName} /><br />
                <br />
                <input type="number" name="" id="" placeholder="Phone Number" required /><br />
                <br />
                <input type="text" name="" id="" placeholder="Address" required /><br />
                <br />
                <br />
                <button onClick={handleProductOrder} className="btn btn-success" style={{ float: 'center' }}>Confirm</button>

            </form>
            <br />
            <br />
            <br />
            <br />
            <br />


            <br />
            <br />
            <br />
            <br />
            <br />

        </div>




    );
};

export default Bookings;