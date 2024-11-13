import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './CheckoutForm.css';
import useCheckoutForm from '../hooks/useCheckoutForm';

const CheckoutForm = () => {
  const location = useLocation();
  const { productName } = location.state || {};
  const { certificateId } = useParams();
  
  const {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleBack,
    handleSubmit,
  } = useCheckoutForm(certificateId);

  return (
    <div className="checkout-form_container">
      <div className="checkout-form">
        <h1 className="checkout-form__title">
          {productName ? (
            `${productName}`
          ) : (
            'Нет информации о продукте.'
          )}
        </h1>
        <form className="checkout-form__form" onSubmit={handleSubmit}>
          <label className="checkout-form__label" htmlFor="name">Имя:</label>
          <input 
            className="checkout-form__input checkout-form__input--name"
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <br />
          <label className="checkout-form__label" htmlFor="phone">Телефон:</label>
          <input 
            className="checkout-form__input checkout-form__input--phone"
            type="tel" 
            id="phone" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
            required 
            placeholder="123-456-7890"
          />
          <br />
          <label className="checkout-form__label" htmlFor="email">Email:</label>
          <input 
            className="checkout-form__input checkout-form__input--email"
            type="email" 
            id="email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <br />
          <button className="checkout-form__button checkout-form__button--back" type="button" onClick={handleBack}>Назад</button>
          <button className="checkout-form__button checkout-form__button--submit" type="submit">Оплатить</button> 
        </form>
      </div>
    </div>
  );
}

export default CheckoutForm;
