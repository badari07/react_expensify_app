import uuid from 'uuid';
import dataBase from '../firebase/firebase';


const addExpense=(expense)=>({
    type:'add_Expense',
    expense
})

const startAddExpense=(expenseData={})=>{
    return (dispatch)=>{
        const {description='',note='',amount=0,createdAt=0}=expenseData;
        const expense={description,note,amount,createdAt};

       return dataBase.ref('expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
           
        })
    }
}

const removeExpense=({id}={})=>({
    type:'remove_Expense',
    id

})


const editExpense=(id,updates)=>({
    type:'edit_Expense',
    id,
    updates
})

export {addExpense,removeExpense,editExpense,startAddExpense} 