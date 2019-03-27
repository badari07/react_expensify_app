import React from 'react';
import {shallow} from 'enzyme';
import ExpanseDashboardPage from '../../components/ExpanseDashboardPage';

test('should render the ExpanseDashboardPage',()=>{
    const wrapper=shallow(<ExpanseDashboardPage/>);
    expect(wrapper).toMatchSnapshot();
});