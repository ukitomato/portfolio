import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

it('should render without crashing', () => {
    shallow(<Header />);
});
