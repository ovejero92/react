import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { CarritoProvider } from './context/CarritoContext';
import App from '../src/Components/App';
import './utils/funciones.js'
import './utils/pruebas.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <CarritoProvider>
   <App />
 </CarritoProvider>
   
  
);

