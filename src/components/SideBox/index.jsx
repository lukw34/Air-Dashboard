import React from 'react';
import PropTypes from 'prop-types';

import './SideBox.scss';

const SideBox = ({paramCode, id, onClick, value, isActive = false, paramName}) => (
    <div
        role="button"
        tabIndex="0"
        className={`SideBox ${isActive && 'active'}`}
        onClick={() => onClick(id)}
        onKeyPress={() => {}}
    >
        <div className="type" data-name={paramName}>
            {paramCode}
        </div>
        <div className="value">
            {value}
        </div>
    </div>
);

SideBox.propTypes = {
    paramCode: PropTypes.string,
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
    value: PropTypes.number,
    id: PropTypes.string,
    paramName: PropTypes.string
};

export default SideBox;