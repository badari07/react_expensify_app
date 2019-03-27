import moment from 'moment';
import filterRedusers from '../../redusers/filters';

test('should setup default filters values',()=>{
    const state=filterRedusers(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')   
    })

});

test('should set sortBy to amount',()=>{
    const state=filterRedusers(undefined,{type:'sortBy_Amount'});
    expect(state.sortBy).toBe('amount')
});

test('should set sortBy to date',()=>{
    const currentState={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined  
    };
    const action={type:'sortBy_Date'};
    const state = filterRedusers(currentState,action);
    expect(state.sortBy).toBe('date');
});

test('should set startDate filter',()=>{
    const startDate=moment();
    const action = {
        type: 'start_Date',
        startDate
    }
    const state=filterRedusers(undefined,action);
    expect(state.startDate).toEqual(startDate)
});

test('should set text filter',()=>{
    const text='this ismy text';
    const action={
        type: 'setText_Filter',
        text
    }
    const state=filterRedusers(undefined,action);
    expect(state.text).toBe(text);
});

test('should set endDate filter', () => {
    const endDate = moment();
    const action = {
        type: 'end_Date',
        endDate
    }
    const state = filterRedusers(undefined, action);
    expect(state.endDate).toEqual(endDate)
});

