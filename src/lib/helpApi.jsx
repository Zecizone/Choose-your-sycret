import { useState, useEffect } from 'react';

const helpApi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

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

  return { data, error };
};

export default helpApi;
