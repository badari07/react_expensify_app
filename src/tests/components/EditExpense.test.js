import React from 'react';
import {EditExpansePage} from '../../components/EditExpansePage';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';


let editExpense, startRemoveExpense, history, wrapper;

beforeEach(()=>{
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history= {push:jest.fn()};
    wrapper = shallow(<EditExpansePage 
    editExpense={editExpense}
    history={history} 
    startRemoveExpense={startRemoveExpense}
    expense={expenses[2]}    
    />);

})

test('should render EditExpensePage', () => {
        expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
        expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2])

});

test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expenses[2].id})

});