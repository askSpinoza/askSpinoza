import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navigation from './components/navbar';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <React.StrictMode>
      <App />
      <Navigation />
    </React.StrictMode>,
    document.getElementById('root')
  );