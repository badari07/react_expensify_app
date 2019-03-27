import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';


const addExpense=({description='',note='',amount=0,creadetAt=0}={})=>({
    type:'add_Expense',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        creadetAt
    }
})

const removeExpense=({id}={})=>({
    type:'remove_Expense',
    id

})


const editExpense=(id,amount)=>({
    type:'edit_Expense',
    id,
    amount
})


const expenseReducersDefault=[];

const expenseReducers=(state=expenseReducersDefault,action)=>{
    switch(action.type){
        case 'add_Expense':
        return [...state,action.expense] ;

        case 'remove_Expense':
        return state.filter(({id})=> id!==action.id);

        case 'edit_Expense':
        return state.map((cur)=>{
            if(cur.id===action.id){
                return {...cur,...action.amount};
            }

        });

        default:
        return state
    }
}


 const setTextFilter=(text='')=>({
    type:'setText_Filter',
    text
 });


 const sortByAmount=(sortby='amount')=>({
     type:'sortBy_Amount' ,
     sortby
 });

 const sortByDate=(sortby='date')=>({
     type:'sortBy_Date',
     sortby
 });


 const setStartDate=(startDate)=>({
    type:'start_Date',
    startDate
 });

 const setEndDate=(endDate)=>({
    type:'end_Date',
    endDate

 });

const filtersReducersDefault={text:'',sortBy:'date',startDate:undefined,endDate:undefined};


const filtersReducers=(state=filtersReducersDefault,action)=>{
    switch(action.type){

        case 'setText_Filter':
        return {
            ...state,text:action.text
        };
        case 'sortBy_Amount':
        return{
            ...state,sortBy:action.sortby
        }

        case 'sortBy_Date':
        return{
            ...state,sortBy:action.sortby
        }

        case 'start_Date':
        return{
            ...state,startDate:action.startDate
        };

        case 'end_Date':
        return{
            ...state,endDate:action.endDate
        };

        default:
        return state
    }

}


const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch= typeof startDate !=='number' || expense.createdAt >= startDate;
        const endDateMatch= typeof endDate !=='number' || expense.createdsAt <=endDate;
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch

    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt < b.createdAt ? 1: -1
        } else if(sortBy==='amount'){
            return a.amount < b.amount ? 1 : -1
        }
    })
};


const store=createStore(combineReducers({
    expenses:expenseReducers,
    filters:filtersReducers
}));



store.subscribe(() => {
    const state=store.getState();
    const visibleExpenses= getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
})

const expenseOne=store.dispatch(addExpense({description:'rent',amount:100,createdAt:-21000}))
const expenseTwo=store.dispatch(addExpense({description:'coffee',amount:300,createdAt:-1000}))


// store.dispatch(removeExpense({id:expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}))

//store.dispatch(setTextFilter('c'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))



const demoState={
    expense:[{
        id:'gdbahbckdos',
        description:'jan rent',
        note:'this is a final paymnet',
        amount:54000,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',//amount or data
        startDate:undefined,
        endDate:undefined

    }
};
