import React from 'react';
import { shallow } from 'enzyme';
import Contact from '../../components/Contact';

it('should render without crashing', () => {
    shallow(<Contact />);
});
