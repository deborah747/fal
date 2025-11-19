import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './component/nav';
import Footer from './component/footer';
import Home from './pages/home';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Destination from './pages/destination';
import DestinationDetail from './pages/DestinationDetail';
import Contact from './pages/contact';
import Hotels from './pages/hotels';
import Tour from './pages/tour';
import Booking from './pages/booking';
import Filter from './pages/filter';
import Payment from './pages/payment';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/des" element={<Destination/>} />
            <Route path="/des/:id" element={<DestinationDetail />} />
            <Route path="/payment/:id" element={<Payment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/hotel" element={<Hotels />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/filter" element={<Filter />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
