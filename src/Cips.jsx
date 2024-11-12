import './Cips.css';
import React, { useState, useEffect } from 'react';

const Cips = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ApiKey: //КТО ЗНАЕТ ТОТ ЗНАЕТ,
          MethodName: "OSGetGoodList"
        }),
mode: 'no-cors'
      };

      try {
        const response = await fetch('https://sycret.ru/service/api/api', requestOptions);
        
        if (!response.ok) {
          const errorText = await response.text(); 
          throw new Error(`Network response was not ok: ${response.statusText}. Response: ${errorText}`);
        
        }
        
        const responseData = await response.json();
        setData(responseData.data || []); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message); 
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {data.length > 0 ? (
          data.map((product, index) => (
            <li key={index}>
              <p>{product.Id}</p>
            </li>
          ))
        ) : (
          <p>No products found.</p> 
        )}
      </ul>
    </div>
  );
}

export default Cips;
