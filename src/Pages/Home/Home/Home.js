import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';

// import Doctors from '../Doctors/Doctors';
import Footer from '../../Shared/Footer/Footer';
import Services from '../Services/Services';
import UsersReviews from '../UsersReviews/UsersReviews';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <UsersReviews></UsersReviews>
           
            
            
            
        </div>
    );
};

export default Home;