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
