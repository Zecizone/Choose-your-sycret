import React, { useState, useEffect } from 'react';
import './Certificates.css';
import { useNavigate } from 'react-router-dom'; 
import Buy from '../Buy/Buy';

const Certificates = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      const params = new URLSearchParams({
        ApiKey: "011ba11bdcad4fa396660c2ec447ef14",
        MethodName: "OSGetGoodList"
      });
    
      const url = `https://sycret.ru/service/api/api?${params}`;
    
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: { 
            'Content-Type': 'application/json'
          }
        });
      
        if (!response.ok) {
          throw new Error(`Ошибка сети: ${response.statusText}`);
        }
      
        const responseData = await response.json();
        if (responseData.data) {
          setData(responseData.data);
        } else {
          throw new Error('Нет данных для отображения');
        }
      } catch (error) {
        console.error('Ошибка:', error);
        setError(error);
      }
    };
    fetchData();
  }, []);

  const handleBuyClick = (certificateId, productName) => {
    navigate(`/checkout/${certificateId}`, { state: { productName } });
  };

  return (
    <div className='sycret-block'>
      <h1 className='sycret-block__title'>Выбери свой SYCRET</h1>
      {error && <p className='sycret-block__error'>Ошибка: {error.message}</p>}
      <ul className='sycret-block__list'>
        {data.length > 0 ? (
          data.map((product) => (
            <li key={product.ID} className='sycret-block__item'>
              <p className='sycret-block__product-name'>{product.NAME}</p>
              <p className='sycret-block__product-sum'>
                Цена - {new Intl.NumberFormat('ru-RU').format(product.SUMMA).replace(',', ' ').replace(/\.\d{2}$/, '')}
              </p>
              <Buy 
                certificateId={product.ID} 
                productName={product.NAME} 
                handleBuyClick={() => handleBuyClick(product.ID, product.NAME)}
              >
                Купить
              </Buy>
            </li>
          ))
        ) : (
          <p className='sycret-block__loading-message'>Загружаем доступные сертификаты &#128536;</p> 
        )}
      </ul>
    </div>
  );
}

export default Certificates;
