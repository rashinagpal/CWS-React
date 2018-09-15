import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './components/App';
import store from './stores';
import registerServiceWorker from './registerServiceWorker';
import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/theme-fresh.css";
import "./styles.css";

ReactDOM.render(
  <Provider { ...store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
