
import React, { useEffect, useState } from 'react';

import Explore from './Explore';

const Explores = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services" className="service-title-container">
            <h2 className="title ">Our services</h2>
            <div className="service-container">
                {
                    services.map(service => <Explore
                        key={service.id}
                        service={service}
                    ></Explore>)
                }
            </div>
        </div>
    );
};

export default Explores;