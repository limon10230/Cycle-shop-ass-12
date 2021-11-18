
import './App.css';
import Home from './Pages/Home/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

import NotFound from './Pages/Home/NotFound/NotFound';


import Bookings from './Pages/Bookings/Bookings/Bookings';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Login/Register/Register';


import Footer from './Pages/Shared/Footer/Footer';

import Explores from './Pages/Explore/Explores';
import AddService from './Pages/AddService/AddService';
// import AddService from './Pages/Dashboard/AddService/AddService';




function App() {
  return (
    <div className="App">
      {/* Routing option  */}
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/addService">
            <AddService></AddService>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/explore">
             <Explores></Explores>
            </Route>
            
            {/* <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute> */}
            <PrivateRoute path="/bookings/:serviceId">
              <Bookings></Bookings>
            </PrivateRoute>
            
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
