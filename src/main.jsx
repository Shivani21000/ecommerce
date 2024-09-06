import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import CartProvider from './CartContext';  // Import CartProvider
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CartProvider>  {/* Wrap App with CartProvider */}
      <App />
    </CartProvider>
  </StrictMode>
);