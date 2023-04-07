import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import Signstate from './context/signState';
import LetterState from './context/letterState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LetterState>
      <Signstate>
        <App />
      </Signstate>
    </LetterState>
  </React.StrictMode>
);

