import { useState, useEffect } from 'react';

const helpApi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const params = new URLSearchParams({
        ApiKey: process.env.REACT_APP_API_KEY,
        MethodName: process.env.REACT_APP_METHOD_NAME_GG_LIST
      });

      const url = `${process.env.REACT_APP_API_URL}?${params}`;
      
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

  return { data, error };
};

export default helpApi;
