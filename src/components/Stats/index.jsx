import React from 'react';
import PropTypes from 'prop-types';

import './Stats.scss';

const Stats = ({min, max, average}) => (
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
        </div>
    </div>
);

Stats.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    average: PropTypes.number
};

export default Stats;