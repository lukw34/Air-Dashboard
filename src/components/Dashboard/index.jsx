import React from 'react';
import PropTypes from 'prop-types';

import Stats from '../../containers/Stats';
import MainChart from '../MainChart';
import SideBox from '../SideBox';
import SearchInput from '../../containers/SearchInput';

import './Dasboard.scss';

const Dashboard = ({sensors = []}) => (
    <main className="Dashboard">
        <Stats />
        <div className="middle">
            <SearchInput />
            <MainChart
                type="PM10"
                sensorId="123"
            />
        </div>
        {
            sensors.length > 0 && (
                <div className="side-chart-container">
                    {sensors.map(box => <SideBox key={box.id} {...box} />)}
                </div>
            )
        }
    </main>
);

Dashboard.propTypes = {
    sensors: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number
    }))
};

export default Dashboard;