import './Buy.css';
import React from 'react';

const Buy = ({ certificateId, productName, handleBuyClick, children}) => {
  const handleClick = () => {
      handleBuyClick(certificateId, productName);
  };

  return (
      <button className='sycret-block__buy-button' onClick={handleClick}>{children}</button>
  );
}

export default Buy;