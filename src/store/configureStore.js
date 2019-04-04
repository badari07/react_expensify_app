import {createStore,combineReducers,applyMiddleware} from 'redux';
import filtersReducers from '../redusers/filters';
import expenseReducers from '../redusers/expenses';
import thunk from 'redux-thunk';  


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default ()=>{

    const store = createStore(combineReducers({
        expenses: expenseReducers,
        filters: filtersReducers
    }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store

};

