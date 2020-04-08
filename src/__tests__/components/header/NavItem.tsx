import React from 'react';
import { shallow } from 'enzyme';
import NavItem from '../../../components/header/NavItem';

it('should render without crashing', () => {
    shallow(<NavItem name={'Test'} />);
});

test("should render props's value", () => {
    const navItem = shallow(<NavItem name={'React'} />);
    expect(navItem.childAt(0).html()).toContain('<a>REACT</a>');
    navItem.setProps({ name: 'World' });
    expect(navItem.childAt(0).html()).toContain('<a>WORLD</a>');
});
