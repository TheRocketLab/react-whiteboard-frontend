import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { ThemedApp } from './styles';

ReactDOM.render(
  <ThemedApp>
    <App />
  </ThemedApp>,
  document.getElementById('root')
);
registerServiceWorker();
