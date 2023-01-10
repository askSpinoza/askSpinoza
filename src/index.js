import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Navigation from './components/navbar';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Navigation />, document.getElementById('navbar'));