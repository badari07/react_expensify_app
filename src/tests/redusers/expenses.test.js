import moment from 'moment';
import expensesRedusers from '../../redusers/expenses';
import expenses from '../fixtures/expenses';


test('should set default expenses',()=>{
    const state=expensesRedusers(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
});

test('should remove expense by ID',()=>{
    const action={type:'remove_Expense', id:expenses[1].id};
    const state=expensesRedusers(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]])
});

test('should remove expense by ID', () => {
    const action = {
        type: 'remove_Expense',
        id: '-1'
    };
    const state = expensesRedusers(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set add expenses',()=>{
    const expense={
        id:'109',
        description:'laptop',
        note:'',
        createdAt:2000,
        amount:29500
    };

    const action={type:'add_Expense', expense};
    const state=expensesRedusers(expenses,action);
    expect(state).toEqual([...expenses,expense])
});

test('should set edit expense',()=>{
    const amount=12000
    const action={type:'edit_Expense',id:expenses[1].id,updates:{amount}}
    const state=expensesRedusers(expenses,action);
    expect(state[1].amount).toBe(amount)
});

test('should set edit expense', () => {
    const amount = 12000;
    const action = {
        type: 'edit_Expense',
        id: '-1',
        updates: {
            amount
        }
    }
    const state = expensesRedusers(expenses, action);
    expect(state).toEqual(expenses)
})

test('should set expenses',()=>{
    const action={
        type: 'set_Expenses',
        expenses:[expenses[1]]
    };
    const state = expensesRedusers(expenses,action);
    expect(state).toEqual([expenses[1]]);
})



