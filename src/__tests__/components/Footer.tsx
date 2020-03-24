import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

it('should render without crashing', () => {
    shallow(<Footer />);
});
