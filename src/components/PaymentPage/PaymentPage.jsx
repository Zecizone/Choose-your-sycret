import React from 'react';
import './PaymentPage.css';

const PaymentPage = () => {
  return (
    <div className="payment-container">
      <h1 className="payment-title">Оплата...</h1>
      <p className="payment-message">Пожалуйста, подождите, идет обработка вашего платежа.</p>
    </div>
  );
};

export default PaymentPage;
