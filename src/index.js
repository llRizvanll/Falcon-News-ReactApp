// Import the react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './header';
import './css/style.css';
import './css/newspaper.css';


// Create a react component
const Home = () => {
    return <Dashboard />
}

// Take the react component and show it on the screen
ReactDOM.render(
    <Home/>,
    document.querySelector('#root')
)