import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import store from './redux/app/store.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap the App component with the Provider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
