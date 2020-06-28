import React from 'react';
import ReactDOM from 'react-dom';
import MainContextProvider from './contexts/MainContext';
import App from './App';

ReactDOM.render(
    <MainContextProvider>
        <App />
    </MainContextProvider>,
document.getElementById('root'));
