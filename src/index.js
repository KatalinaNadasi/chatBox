import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import './style/style';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
