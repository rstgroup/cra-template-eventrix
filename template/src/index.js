import React from 'react';
import { createRoot } from 'react-dom/client';
import { EventrixProvider } from 'eventrix';
import eventrix from './app/eventrix';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <EventrixProvider eventrix={eventrix}>
      <App />
    </EventrixProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
