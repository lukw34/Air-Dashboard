import React from 'react';
import PropTypes from 'prop-types';

import './SideBox.scss';

const SideBox = ({paramCode, id, onClick, lastValues, isActive = false, paramName}) => {
    const values = lastValues || [];
    const [value = 0, penultimateValue] = values;
    let rate = null;
    if (penultimateValue) {
        rate = (((value / penultimateValue) - 1) * 100).toFixed(2);
    }

    return (
        <div
            role="button"
            tabIndex="0"
            className={`SideBox ${isActive && 'active'}`}
            onClick={() => onClick(id)}
            onKeyPress={e => e.preventDefault()}
        >
            <div className="type" data-name={paramName}>
                {paramCode}
            </div>

            <div className={`value-container ${values.length > 0 && 'ready'}`}>
                <div>{value.toFixed(4)}</div>
                <div className={`rate ${rate > 0 ? 'minus' : 'plus'}`}>{rate}</div>
            </div>
        </div>
    );
};

SideBox.propTypes = {
    paramCode: PropTypes.string,
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
    lastValues: PropTypes.arrayOf(PropTypes.number),
    id: PropTypes.number,
    paramName: PropTypes.string
};

export default SideBox;