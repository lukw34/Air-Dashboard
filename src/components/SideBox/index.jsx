import React from 'react';
import PropTypes from 'prop-types';

import './SideBox.scss';

const SideChart = ({paramCode, onClick, value, isActive = false, paramName}) => (
    <div
        role="button"
        tabIndex="0"
        className={`SideBox ${isActive && 'active'}`}
        onClick={onClick}
        onKeyPress={onClick}
    >
        <div className="type" data-name={paramName}>
            {paramCode}
        </div>
        <div className="value">
            {value}
        </div>
    </div>
);

SideChart.propTypes = {
    paramCode: PropTypes.string,
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
    value: PropTypes.number,
    paramName: PropTypes.string
};

export default SideChart;