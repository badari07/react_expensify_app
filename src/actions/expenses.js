import uuid from 'uuid';


const addExpense=({description='',note='',amount=0,createdAt=0}={})=>({
    type:'add_Expense',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense=({id}={})=>({
    type:'remove_Expense',
    id

})


const editExpense=(id,updates)=>({
    type:'edit_Expense',
    id,
    updates
})

export {addExpense,removeExpense,editExpense} 