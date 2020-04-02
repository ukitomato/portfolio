import React from 'react';
import { shallow } from 'enzyme';
import Indicator from '../../components/Indicator';

it('should render without crashing', () => {
    shallow(<Indicator />);
});
