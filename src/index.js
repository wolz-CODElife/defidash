import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MoralisProvider } from "react-moralis";
import { APP_ID, SERVER_URL } from './services/MoralisConfig';

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider serverUrl={SERVER_URL} appId={APP_ID}>
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

