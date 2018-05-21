import React from 'react';
import PropTypes from 'prop-types';

import './Stats.scss';

const Stats = ({min, max, average, median}) => (
    <div className="Stats">
        <div className="items">
            <div className="item" data-name="min">
                {min || '?'}
            </div>
            <div className="item" data-name="max">
                {max || '?'}
            </div>
            <div className="item" data-name="avg">
                {average || '?'}
            </div>
            <div className="item" data-name="median">
                {median || '?'}
            </div>
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