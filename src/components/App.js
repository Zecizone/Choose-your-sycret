import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CheckoutForm from './CheckoutForm/CheckoutForm'; 
import PaymentPage from './PaymentPage/PaymentPage'; 
import Certificates from './certificates/Сertificates';
import '../components/App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Certificates />} />
      <Route path="/checkout/:certificateId" element={<CheckoutForm />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
};

export default App;
