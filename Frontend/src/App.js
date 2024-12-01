import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SubscriptionsPage from './components/SubscriptionsPage';
import OffersPage from './components/OffersPage';
import Navbar from './components/Navbar';
import PaymentPage from './components/PaymentPage';
import LoginPage from './components/LoginPage';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    {/* Home Page */}
                    <Route path="/" element={<HomePage />} />

                    {/* Subscriptions Page */}
                    <Route path="/subscriptions" element={<SubscriptionsPage />} />

                    {/* Offers Page */}
                    <Route path="/offersPage" element={<OffersPage />} />

                    {/* Payment Page */}
                    <Route path="/payment" element={<PaymentPage />} />

                    {/* Login Page */}
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
