import React from 'react';
import PropTypes from 'prop-types';

import bitcoin from '../../assets/svg/bitcoin.svg';
import './Header.scss';

const Header = ({title}) => (
    <header className="Header">
        <img
            src={bitcoin}
            className="logo"
            alt="logo"
        />
        <h1 className="title">{title}</h1>
    </header>
);


Header.propTypes = {
    title: PropTypes.string
};

export default Header;
