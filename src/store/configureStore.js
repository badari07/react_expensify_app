import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import filtersReducers from '../redusers/filters';
import expenseReducers from '../redusers/expenses';
import authReducers from '../redusers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default ()=>{

    const store = createStore(combineReducers({
        expenses: expenseReducers,
        filters: filtersReducers,
        auth: authReducers
    }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;

};

