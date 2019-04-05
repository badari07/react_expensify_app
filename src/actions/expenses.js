import uuid from 'uuid';
import database from '../firebase/firebase';
import { dispatch } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.4/node_modules/rxjs/internal/observable/pairs';


const addExpense=(expense)=>({
    type:'add_Expense',
    expense
})

const startAddExpense=(expenseData={})=>{
    return (dispatch)=>{
        const {description='',note='',amount=0,createdAt=0}=expenseData;
        const expense={description,note,amount,createdAt};

       return database.ref('expenses').push(expense).then((ref)=>{
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

export const setExpenses=(expenses)=>({
    type:'set_Expenses',
    expenses
})

export const startSetExpenses=()=>{
    return (dispatch)=>{
      return  database.ref('expenses').once('value').then((snapshot)=>{
        const expenses=[];
        snapshot.forEach((childsnapshot)=>{
            expenses.push({
                id:childsnapshot.key,
                ...childsnapshot.val()
            })
        })
        dispatch(setExpenses(expenses))
        })
    }
};  

export {addExpense,removeExpense,editExpense,startAddExpense} 