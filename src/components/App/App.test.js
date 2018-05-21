import React from 'react';
import {shallow} from 'enzyme';
import App from './index';

describe('<App/>', () => {
    it('should render properly', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.length).toBe(1);
    });
});
