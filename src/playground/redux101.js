import {createStore} from 'redux';


const increment=({incby=1}={})=>({
    type:1,
    incby: incby

})

const decrement=({decby=1}={})=>({
    type:0,
    decby:decby

})


const reset=()=>({
    type:2

})

const set=({count})=>({
    type:3,
    count:count

})

const reducersCount=(state={count:0},action)=>{
    switch(action.type){
        case 1:

        return {
            count:state.count + action.incby
        };

        case 2:
        return {
            count:0
        };

        case 0:
        return{
            count: state.count - action.decby
        };

        case 3:
        return{
            count:action.count
        }

        default:
        return state
    }

}

const store = createStore(reducersCount)

const unsubscribe =store.subscribe(()=>{
console.log(store.getState());
})


store.dispatch(increment())
store.dispatch(increment({incby:5}))


store.dispatch(decrement())

store.dispatch(decrement({decby:7}))

store.dispatch(reset()) 

store.dispatch(set({count:101}))



