import React from 'react';
import PropTypes from 'prop-types';

import gas from '../../assets/svg/gas.svg';
import './Header.scss';

const Header = ({title}) => (
    <header className="Header">
        <img
            src={gas}
            className="logo"
            alt="logo"
        />
        <h1 className="title">{title}</h1>
        <img
            src={gas}
            className="logo"
            alt="logo"
        />
    </header>
);


Header.propTypes = {
    title: PropTypes.string
};

export default Header;
