import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';

import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
    <React.StrictMode>
      {/* <MantineProvider>
        <ModalsProvider> */}
          <App />
        
        {/* </ModalsProvider>

      </MantineProvider> */}
    {/* The rest of your app goes here */}
    </React.StrictMode>
  </BrowserRouter>
        
      
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
