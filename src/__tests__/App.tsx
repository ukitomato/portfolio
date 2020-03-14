import React from 'react';
import App from '../App';
import {shallow} from "enzyme";

test('renders ci/cd comment', () => {
    const content = <p>CI/CD [CircleCI, TravisCI, Github Actions], Jest, COVERAGE enabled.</p>;
    const wrapper = shallow(<App/>);
    expect(wrapper).toContainReact(content);
});

it('renders without crashing', () => {
    shallow(<App/>);
});