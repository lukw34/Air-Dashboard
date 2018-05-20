import React from 'react';
import PropTypes from 'prop-types';

import DateChart from '../../containers/DateChart';
import './MainPlot.scss';

const MainChart = ({type, sensorId}) => (
    <div className="MainPlot">
        <DateChart
            type={type}
            sensorId={sensorId}
        />
    </div>
);

MainChart.propTypes = {
    type: PropTypes.string,
    sensorId: PropTypes.string
};

export default MainChart;