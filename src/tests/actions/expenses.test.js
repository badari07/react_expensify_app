import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    startAddExpense,
    addExpense,
    removeExpense,
    editExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense,
    startEditExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid ='thisismytestuid';
const defaultAuthState={auth:{uid}};

const createMockStore =configureMockStore([thunk]);

beforeEach((done)=>{
    const expenseDate={};
    expenses.forEach(({id,description,amount,createdAt,note})=>{
        expenseDate[id]={description,amount,createdAt,note};
    });
    database.ref(`users/${uid}/expenses`).set(expenseDate).then(()=> done());
})

test('should setup remove expense action object',()=>{
    const action=removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'remove_Expense',
        id:'123abc'

    })
});


test('should remove expense from firebase',(done)=>{
    const store=createMockStore(defaultAuthState);
    const id=expenses[2].id;
    store.dispatch(startRemoveExpense({id})).then(()=>{
        const actions=store.getActions();
        expect(actions[0]).toEqual({
            type: 'remove_Expense',
            id
        })

        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done();
    })
})

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

test('should setup edit expense from firebase',(done)=>{
    const store=createMockStore(defaultAuthState);
    const id=expenses[0].id;
    const updates={amount:21045}
    store.dispatch(startEditExpense(id,updates)).then(()=>{
        const actions=store.getActions();
        expect(actions[0]).toEqual({
            type: 'edit_Expense',
            id,
            updates
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val().amount).toBe(updates.amount)
        done();
    })
})

test('should setup the add  expense action object',()=>{
    
    const action=addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'add_Expense',
         expense: expenses[2]
})
});


test('should add expense to database and store',(done)=>{
    const store=createMockStore(defaultAuthState);
    const expenseDate={
        description:'mouse',
        amount:250,
        note:'this one is better',
        createdAt:1000
    };

     store.dispatch(startAddExpense(expenseDate)).then(()=>{
        const actions=store.getActions();
        expect(actions[0]).toEqual({
            type:'add_Expense',
            expense:{
                id:expect.any(String),
                ...expenseDate
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
         }).then((snapshot) => {
             expect(snapshot.val()).toEqual(expenseDate);
             done();
         })
        })

    

test('should add expense with default  to database and store', (done) => {
 const store = createMockStore(defaultAuthState);
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
     return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
 }).then((snapshot) => {
     expect(snapshot.val()).toEqual(expenseDefaults);
     done();
 })
})

test('should setup set expense action object with data',()=>{
const action = setExpenses(expenses);
expect(action).toEqual({
    type: 'set_Expenses',
    expenses
})
})

test('should fetch the expenses from firebase',(done)=>{
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(()=>{
const actions=store.getActions();
expect(actions[0]).toEqual({
    type: 'set_Expenses',
    expenses
})
done();
    })

})