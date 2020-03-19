import React from 'react';
import {shallow} from "enzyme";
import Career from "../../components/Career";


it('should render without crashing', () => {
    shallow(<Career/>);
});
