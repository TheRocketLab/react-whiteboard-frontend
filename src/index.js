import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global';
import App from './App';

import { ThemedApp } from './styles';

ReactDOM.render(
  <ThemedApp>
    <App />
  </ThemedApp>,
  document.getElementById('root')
);
