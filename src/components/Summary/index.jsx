import React from 'react';
import PropTypes from 'prop-types';

import './Summary.scss';

const Summary = ({summary}) => {
    const isSummary = !!summary;
    const {indexLevelName = '', id} = summary || {};
    return (
        <div className={`Summary ${isSummary && 'active'} class-${id}`}>
            Summary: <span>{indexLevelName}</span>
        </div>
    );
};

Summary.propTypes = {
    summary: PropTypes.shape({
        id: PropTypes.number,
        indexLevelName: PropTypes.string
    })
};

export default Summary;