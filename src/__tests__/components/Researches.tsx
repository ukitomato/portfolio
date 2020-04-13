import React from 'react';
import { shallow } from 'enzyme';
import Researches from '../../components/Researches';

it('should render without crashing', () => {
    shallow(<Researches />);
});
