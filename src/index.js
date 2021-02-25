import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SpeechProvider } from '@speechly/react-client';
import './index.css';
import { Provider } from './context/Context';

ReactDOM.render(
  <SpeechProvider appId="b89000f3-d2c7-48ef-8d3a-89ec1e729337" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);
