import React from 'react';
import { shallow } from 'enzyme';
import gluegent from '../../../imgs/Gluegent.gif';
import Internship from '../../../components/career/Internship';

it('should render without crashing', () => {
    shallow(
        <Internship
            name={'Test'}
            topic={'Test'}
            term={'Test'}
            type={'Test'}
            position={'Test'}
            description={'Test'}
            img={gluegent}
        />
    );
});
