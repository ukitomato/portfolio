import React from 'react';
import { shallow } from 'enzyme';
import gluegent from '../../../imgs/Gluegent.gif';
import Research from '../../../components/reserch/Research';

it('should render without crashing', () => {
    shallow(
        <Research
            name={'Test'}
            topic={'Test'}
            term={'Test'}
            type={'Test'}
            url={'Test'}
            description={'Test'}
            img={gluegent}
            publish={'Test'}/>
    );
});
