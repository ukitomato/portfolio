import React from 'react';
import App from '../App';
import {shallow} from "enzyme";
import Home from "../components/Home";
import About from "../components/About";
import Skill from "../components/Skill";
import Career from "../components/Career";
import Header from "../components/Header";
import Footer from "../components/Footer";

it('should render without crashing', () => {
    shallow(<App/>);
});

test('should exist child components', () => {
    // == 準備 ==
    /** Appコンポーネントをshallowレンダリング */
    const wrapper = shallow(<App/>);

    expect(wrapper.find(Header).length).toBe(1);
    expect(wrapper.find(Home).length).toBe(1);
    expect(wrapper.find(About).length).toBe(1);
    expect(wrapper.find(Skill).length).toBe(1);
    expect(wrapper.find(Career).length).toBe(1);
    expect(wrapper.find(Skill).length).toBe(1);
    expect(wrapper.find(Footer).length).toBe(1);
});
