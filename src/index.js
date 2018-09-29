import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//It register a service worker for progressive web app creation 

ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();