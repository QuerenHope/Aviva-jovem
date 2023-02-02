import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/global';
import App from './App';
import { RouterProvider } from './context/RouterContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider>
      <GlobalStyle />
      <App />
    </RouterProvider>
  </React.StrictMode>
);

