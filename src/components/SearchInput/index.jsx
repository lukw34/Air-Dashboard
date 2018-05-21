import React from 'react';
import PropTypes from 'prop-types';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import './SearchInput.scss';

const SearchInput = ({data = [], onChange, value}) => (
    <div className="SearchInput">
        <DropDownMenu
            autoWidth
            placeholder="Select station"
            className="drop-down"
            onChange={onChange}
            disabled={data.length < 1}
            value={value}
            menuItemStyle={{width: '50vh'}}
        >
            {data.map(item => <MenuItem key={item.value} {...item} />)}
        </DropDownMenu>
    </div>
);

SearchInput.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})),
    onChange: PropTypes.func,
    value: PropTypes.string
};

export default SearchInput;