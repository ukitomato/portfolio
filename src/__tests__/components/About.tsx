import React from 'react';
import { shallow } from 'enzyme';
import About from '../../components/About';

it('should render without crashing', () => {
    shallow(<About />);
});
