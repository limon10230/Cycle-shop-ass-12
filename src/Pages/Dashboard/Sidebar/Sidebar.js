import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faUserPlus, faList, faPen, faUsersCog, faTasks, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
// import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
// import { UserContext } from '../../../App';
import useAuth from '../../../hooks/useAuth';

const Sidebar = () => {
    const { admin } = useAuth();
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { user, logout } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">

                <li>
                    <Link to="/dashboard/Payment" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faMoneyBill} /> <span>Payment</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/userReview" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faPen} /> <span>Review</span>
                    </Link>
                </li>

               
                <li>
                    <Link to="/dashboard/orderList" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faList} /> <span>My-Orders</span>
                    </Link>
                </li>

                {admin && <div>

                    <li>
                        <Link to="/dashboard/addService" className="text-white text-decoration-none">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/makeAdmin" className="text-white text-decoration-none">
                            <FontAwesomeIcon icon={faUsersCog} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/manageService" className="text-white text-decoration-none">
                            <FontAwesomeIcon icon={faTasks} /> <span>Manage Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/manageAllProducts" className="text-white text-decoration-none">
                            <FontAwesomeIcon icon={faTasks} /> <span>Manage All Products</span>
                        </Link>
                    </li>
                   

                </div>}


             
            </ul>
            <div>
                <Link to="/" className="text-white text-decoration-none"><FontAwesomeIcon icon={faSignOutAlt} /> <span onClick={logout}>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;