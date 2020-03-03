import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import App from './power-toes/App'
// import AppLang from './lang-context/AppLang';
import AppRegistrationForm from './registrationForm/registrationForm';
import './index.css';

ReactDOM.render(<BrowserRouter><AppRegistrationForm /></BrowserRouter>, document.getElementById('root'));