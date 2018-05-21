import React from 'react';
import {shallow} from 'enzyme';

import SideBox from './index';

describe('<SideBox />', () => {
    it('should render properly', () => {
        const wrapper = shallow(<SideBox />);
        expect(wrapper.length).toBe(1);
    });

    it('should handle element click', () => {
        const onClick = jest.fn();
        const id = 1;
        const props = {
            onClick,
            id
        };
        const wrapper = shallow(<SideBox {...props} />);
        wrapper.find('.SideBox').at(0).simulate('click');
        expect(onClick).toHaveBeenCalledWith(id);
    });
});