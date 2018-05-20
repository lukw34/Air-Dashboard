import React from 'react';

import Stats from '../Stats';
import MainPlot from '../MainChart';
import SideChart from '../SideChart';

import './Dasboard.scss';

const Dashboard = () => (
    <main className="Dashboard">
        <Stats />
        <MainPlot />
        <div className="side-chart-container">
            <SideChart />
            <SideChart />
            <SideChart />
        </div>
    </main>
);

export default Dashboard;