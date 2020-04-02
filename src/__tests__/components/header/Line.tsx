import React from 'react';
import { shallow } from 'enzyme';
import NavItem from '../../../components/header/NavItem';
import Line from '../../../components/header/Line';

it('should render without crashing', () => {
    shallow(<Line name={'home'} />);
});

it('should render without crashing', () => {
    shallow(<Line name={'home'} />);
});
