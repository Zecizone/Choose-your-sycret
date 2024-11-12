import React, { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const location = useLocation();
  const { productName } = location.state || {};
  const { certificateId } = useParams();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !phone || !email) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    const params = new URLSearchParams({
      ApiKey: "011ba11bdcad4fa396660c2ec447ef14",
      MethodName: "OSSale",
      Name: name,
      Phone: phone,
      Email: email,
      CertificateData: JSON.stringify({ certificateId })
    });

    const url = `https://sycret.ru/service/api/api?${params}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Сетевая ошибка');
      }

      navigate('/payment');
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Ошибка при обработке платежа. Пожалуйста, попробуйте снова.'); 
    }
  };

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
