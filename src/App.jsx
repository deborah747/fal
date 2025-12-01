import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './component/nav';
import Footer from './component/footer';
import Home from './pages/home';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Destination from './pages/destination';
import DestinationDetail from './pages/DestinationDetail';
import Contact from './pages/contact';
import Payment from './pages/payment';
import ProtectedRoute from './component/ProtectedRoute';
import Dashboard from './pages/dashboard';
import SavedDestinations from './pages/saveddestination';
import SearchResults from './pages/searchresult';
import HotelDetail from './pages/hoteldetails';

function AppContent() {
  const location = useLocation();

  // hide nav when on dashboard routes
  const hideNav = location.pathname.startsWith('/dashboard');

  return (
    <>
      {!hideNav && <Nav />}

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/des" element={<Destination/>} />
          <Route path="/des/:id" element={<DestinationDetail />} />
          <Route path="/des/:id/hotel/:hotelId" element={<HotelDetail />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route path="/search" element={<SearchResults />} />

          {/* Dashboard routes */}
          <Route
            path="/dashboard"
            element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
          />
          <Route path="/dashboard/saved" element={<ProtectedRoute><SavedDestinations /></ProtectedRoute>} />
          {/* add other dashboard sub-routes here */}
        </Routes>
      </div>

      <Footer />
    </>
  );
}

const App = () => {
  const useHashRouter = import.meta.env.VITE_USE_HASH_ROUTER === 'true';
  const RouterComponent = useHashRouter ? HashRouter : BrowserRouter;

  return (
    <RouterComponent>
      <div className="flex flex-col min-h-screen">
        <AppContent />
      </div>
    </RouterComponent>
  );
};

export default App;
