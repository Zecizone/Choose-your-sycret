import React from 'react';
import { createRoot } from 'react-dom/client';
import Cips from './Cips';


const App = () => {
  return (
    <div>
      <Cips />
    </div>
  );
};
createRoot(document.getElementById('root')).render(<App />);
