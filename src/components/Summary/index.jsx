import React from 'react';
import PropTypes from 'prop-types';

import './Summary.scss';

const Summary = ({summary, norms = []}) => {
    const isSummary = !!summary;
    const {indexLevelName = '', id} = summary || {};
    return (
        <div className={`Summary ${isSummary && 'active'} class-${id}`}>
            <div className="indexName">{indexLevelName}</div>
            <div className="norms">
                {
                    norms.map(({name, value}) => (
                        <div key={name} className="norm-item">
                            <div className="circle">
                                {value}%
                            </div>
                            <div className="name">
                                {name}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

Summary.propTypes = {
    summary: PropTypes.shape({
        id: PropTypes.number,
        indexLevelName: PropTypes.string
    }),
    norms: PropTypes.arrayOf(PropTypes.shape({}))
};

export default Summary;