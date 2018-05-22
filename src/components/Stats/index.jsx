import React from 'react';
import PropTypes from 'prop-types';

import StatItem from '../StatItem';
import './Stats.scss';

const Stats = ({min, max, average, median}) => (
    <div className="Stats">
        <div className="items">
            <StatItem value={min} name="min" />
            <StatItem value={max} name="max" />
            <StatItem value={average} name="average" />
            <StatItem value={median} name="median" />
        </div>
    </div>
);


Stats.propTypes = {
    min: PropTypes.string,
    max: PropTypes.string,
    average: PropTypes.string,
    median: PropTypes.string
};

export default Stats;