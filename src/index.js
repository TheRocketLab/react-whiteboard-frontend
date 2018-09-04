import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global';
import App from './Page/Home';

import { ThemedApp } from './styles';

ReactDOM.render(
  <ThemedApp>
    <App />
  </ThemedApp>,
  document.getElementById('root')
);
