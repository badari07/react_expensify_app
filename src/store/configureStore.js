import {createStore,combineReducers} from 'redux';
import filtersReducers from '../redusers/filters';
import expenseReducers from '../redusers/expenses';

export default ()=>{

    const store = createStore(combineReducers({
        expenses: expenseReducers,
        filters: filtersReducers
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store

};

