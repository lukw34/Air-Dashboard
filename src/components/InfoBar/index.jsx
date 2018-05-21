import React from 'react';
import PropTypes from 'prop-types';

import './InfoBar.scss';

const Loader = ({text}) => (
    <div className="InfoBar">
        {text}
    </div>
);

Loader.propTypes = {
    text: PropTypes.string
};

export default Loader;