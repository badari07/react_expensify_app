import React from 'react';
import {AddExpansePage} from '../../components/AddExpansePage';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';

let startAddExpense, history, wrapper;

beforeEach(()=>{
    startAddExpense = jest.fn();
    history= {push:jest.fn()}
    wrapper=shallow(<AddExpansePage startAddExpense={startAddExpense} history={history}/>);

})

test('should render addExpanse page',()=>{
    expect(wrapper).toMatchSnapshot()
});

test('should handle onsubmit',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1])
})
