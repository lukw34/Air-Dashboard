import React from 'react';
import PropTypes from 'prop-types';

import Stats from '../../containers/Stats';
import MainChart from '../MainChart';
import SideBox from '../SideBox';
import SearchInput from '../../containers/SearchInput';

import './Dasboard.scss';

const Dashboard = ({sensors = [], onSideBoxClick}) => (
    <main className="Dashboard">
        <Stats />
        <div className="middle">
            <SearchInput />
            <MainChart
                type="PM10"
                sensorId="123"
            />
        </div>
        <div className="side-chart-container">
            {sensors.map(box => <SideBox onClick={onSideBoxClick} key={box.id} {...box} />)}
        </div>
    </main>
);

Dashboard.propTypes = {
    sensors: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number
    })),
    onSideBoxClick: PropTypes.func
};

export default Dashboard;