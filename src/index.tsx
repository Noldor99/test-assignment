import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.sass';
import App from './App';
import {ModalState} from './context/ScrollContext' 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ModalState>
      <App />
    </ModalState>
  </React.StrictMode>
);
 