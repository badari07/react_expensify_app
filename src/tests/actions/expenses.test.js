import {addExpense,removeExpense,editExpense} from '../../actions/expenses';

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
    const expenseDate={
         description:'rent',
         note:'this was the last month rent',
         amount:25000,
         createdAt:1000
    }
    const action=addExpense(expenseDate);
    expect(action).toEqual({
        type: 'add_Expense',
            expense: {
               ...expenseDate,
               id:expect.any(String)
             }
})
});

test('should setup default add expense action object',()=>{
    const action=addExpense();
    expect(action).toEqual({
        type: 'add_Expense',
            expense:{
                    description: '',
                    note: '',
                    amount: 0,
                    createdAt: 0,
                    id:expect.any(String)
    }

})
});