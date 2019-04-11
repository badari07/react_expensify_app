import uuid from 'uuid';
import database from '../firebase/firebase';


const addExpense=(expense)=>({
    type:'add_Expense',
    expense
})

const startAddExpense=(expenseData={})=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
        const {description='',note='',amount=0,createdAt=0}=expenseData;
        const expense={description,note,amount,createdAt};

       return database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
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

export const startRemoveExpense = ({id}={}) => {
    return (dispatch,getState)=>{
        const uid = getState().auth.uid;
       return  database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
           dispatch(removeExpense({id}))
       })
    }
};


const editExpense=(id,updates)=>({
    type:'edit_Expense',
    id,
    updates
})

export const startEditExpense=(id,updates)=>{
return (dispatch,getState)=>{
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
        dispatch(editExpense(id,updates))
    })
}
}


export const setExpenses=(expenses)=>({
    type:'set_Expenses',
    expenses
})

export const startSetExpenses=()=>{
    return (dispatch,getState) => {
        const uid= getState().auth.uid;
      return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
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