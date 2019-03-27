

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss'; 
import 'react-dates/lib/css/_datepicker.css';




const store=configureStore();



store.dispatch(addExpense({description:'gas bill',createdAt:1000}))
store.dispatch(addExpense({description:'water bill',amount:100}))
store.dispatch(addExpense({description:'rent',amount:100}))


store.subscribe(()=>{
const state = store.getState();
const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpense);
})

console.log(store.getState())
    



const jsx = (
    <Provider store={store}>
    <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));



