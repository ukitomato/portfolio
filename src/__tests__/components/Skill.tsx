import React from 'react';
import { shallow } from 'enzyme';
import Skill from '../../components/Skill';

it('should render without crashing', () => {
    shallow(<Skill />);
});
