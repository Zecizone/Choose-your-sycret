import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './Loader/Loader';
import CheckoutForm from './CheckoutForm/CheckoutForm'; 
import PaymentPage from './PaymentPage/PaymentPage'; 
import '../components/App.css';
import Certificates from './certificates/Сertificates';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Certificates />} />
      <Route
        path="/checkout/:certificateId"
        element={
          <Suspense fallback={<Loader />}>
            <CheckoutForm />
          </Suspense>
        }
      />
      <Route
        path="/payment"
        element={
          <Suspense fallback={<Loader />}>
            <PaymentPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;