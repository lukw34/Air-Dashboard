import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dashboard from '../../containers/Dashboard';
import Header from '../Header';
import './App.scss';

const App = () => (
    <MuiThemeProvider>
        <div className="App">
            <Header
                title="Dashboard"
            />
            <Dashboard />
        </div>
    </MuiThemeProvider>
);

export default App;
