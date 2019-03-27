import React from 'react';
import {shallow} from 'enzyme';
import NotFound from '../../components/NotFoundPage';

test('should render the NotFound page',()=>{
    const wrapper=shallow(<NotFound/>);
    expect(wrapper).toMatchSnapshot();
})