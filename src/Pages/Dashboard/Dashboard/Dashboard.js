import React, { useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../../App';
import { Link, useRouteMatch } from 'react-router-dom';
import AddService from './../AddService/AddService';
import MakeAdmin from './../MakeAdmin/MakeAdmin';
import Payment from './../Payment/Payment';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import OrderList from '../OrderList/OrderList';
import Review from '../Review/Review';

import ManageService from '../ManageService/ManageService';
import useAuth from '../../../hooks/useAuth';
import ManageProduct from '../ManageProduct/ManageProduct';
// import useAuth from '../../../hooks/useAuth';



const Dashboard = () => {
    
    // const { user, logOut } = useAuth();
    let { path, url } = useRouteMatch();

    return (
        <div className="row mt-5">
            
            <div className="col-md-2">
                
                <Sidebar />
            </div>
            <div className="col-md-9">
                <Switch>
                    
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/userReview`}>
                        <Review />
                    </Route>
                    <Route path={`${path}/orderList`}>
                        <OrderList />
                    </Route>
                    
                        <Route path={`${path}/addService`}>
                            <AddService />
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin />
                        </Route>
                        <Route path={`${path}/manageService`}>
                            <ManageService />
                        </Route>
                        <Route path={`${path}/manageAllProducts`}>
                            <ManageProduct />
                        </Route>
                        
                        
                        
                   
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;