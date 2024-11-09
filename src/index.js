import React from 'react';
import { createRoot } from 'react-dom/client';
const App = () => {
  return (
    <div>
      <h1>Привет, мир!</h1>
    </div>
  );
};
createRoot(document.getElementById('root')).render(<App />);
