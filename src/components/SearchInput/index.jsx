import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import './SearchInput.scss';

const SearchInput = () => (
    <div className="SearchInput">
        <DropDownMenu
            autoWidth
            placeholder="Select station"
            className="drop-down"
            menuItemStyle={{width: '50vh'}}
        >
            <MenuItem value={1} primaryText="Krakow" />
            <MenuItem value={2} primaryText="Wroclaw" />
        </DropDownMenu>
    </div>
);

export default SearchInput;