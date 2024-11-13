import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useCheckoutForm = (certificateId) => {
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
      ApiKey: process.env.REACT_APP_API_KEY,
      MethodName: process.env.REACT_APP_METHOD_NAME_SALE,
      Name: name,
      Phone: phone,
      Email: email,
      CertificateData: JSON.stringify({ certificateId })
    });

    const url = `${process.env.REACT_APP_API_URL}?${params}`;

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

  return {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleBack,
    handleSubmit,
  };
};

export default useCheckoutForm;
