import React from 'react';
import {shallow} from 'enzyme';
import ExpenseListItem from '../../components/ExpenseLiistItem';
import expenses from '../fixtures/expenses';


test('should render ExpenseListitem with fixture data',()=>{
    const wrapper=shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();

});