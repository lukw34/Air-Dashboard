import React from 'react';
import Dashboard from '../Dashboard';
import Header from '../Header';
import './App.scss';

const App = () => (
    <div className="App">
        <Header
            title="Dashboard"
        />
        <div> Search box</div>
        <Dashboard />
    </div>
);

export default App;
