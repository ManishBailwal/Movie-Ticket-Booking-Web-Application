import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tailwindcss/tailwind.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css'
// ReactDOM.render(<App />, document.getElementById('root'));
//use createRoot for concurrent mode
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
