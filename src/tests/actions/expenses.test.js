import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense,addExpense,removeExpense,editExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import { String } from 'core-js';
import dataBase from '../../firebase/firebase';
import { TIMEOUT } from 'dns';

const createMockStore =configureMockStore([thunk]);

test('should setup remove expense action object',()=>{
    const action=removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'remove_Expense',
        id:'123abc'

    })
});

test('should setup the edit expense action object',()=>{
    const action=editExpense('123abc',{note:'the new note value'});
    expect(action).toEqual({
         type: 'edit_Expense',
             id:'123abc',
             updates:{
                 note:'the new note value'
             }
    })

});

test('should setup the add  expense action object',()=>{
    
    const action=addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'add_Expense',
            expense: expenses[2]
})
});

test('should add expense to database and store',(done)=>{
    const store=createMockStore({});
    const expenseDate={
        description:'mouse',
        amount:250,
        note:'this one is better',
        createdAt:1000
    };

    store.dispatch(startAddExpense(expenseDate)).then(()=>{
        const actions=store.getActions();
        expect(actions[0]).toEqual({
            type: 'add_Expense',
            expense:{
                id:expect.any(String),
                ...expenseDate
            }
        });
        return dataBase.ref(`expenses/${actions[0].expense.id}`).once('value');
         }).then((snapshot) => {
             expect(snapshot.val()).toEqual(expenseDate);
             done();
         })
        })

    

test('should add expense with default  to database and store', (done) => {
 const store = createMockStore({});
 const expenseDefaults = {
     description: '',
     amount: 0,
     note: '',
     createdAt: 0
 };

 store.dispatch(startAddExpense({})).then(() => {
     const actions = store.getActions();
     expect(actions[0]).toEqual({
         type: 'add_Expense',
         expense: {
             id: expect.any(String),
             ...expenseDefaults
         }
        
     })
     return dataBase.ref(`expenses/${actions[0].expense.id}`).once('value');
 }).then((snapshot) => {
     expect(snapshot.val()).toEqual(expenseDefaults);
     done();
 })
})

// test('should setup default add expense action object',()=>{
//     const action=addExpense();
//     expect(action).toEqual({
//         type: 'add_Expense',
//             expense:{
//                     description: '',
//                     note: '',
//                     amount: 0,
//                     createdAt: 0,
//                     id:expect.any(String)
//     }

// })
// });