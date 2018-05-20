import React from 'react';
import PropTypes from 'prop-types';

import Stats from '../../containers/Stats';
import MainChart from '../MainChart';
import SideBox from '../SideBox';
import SearchInput from '../SearchInput';

import './Dasboard.scss';

const Dashboard = ({sideBoxes = []}) => (
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
            sideBoxes.length > 0 && (
                <div className="side-chart-container">
                    {sideBoxes.map(box => <SideBox key={box.id} {...box} />)}
                </div>
            )
        }
    </main>
);

Dashboard.propTypes = {
    sideBoxes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string
    }))
};

export default Dashboard;