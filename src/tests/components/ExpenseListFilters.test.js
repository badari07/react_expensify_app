import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters,altfilters} from '../fixtures/filters';
// import moment from 'moment';


let setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate,wrapper;

beforeEach(()=>{
    setTextFilter=jest.fn();
     sortByDate = jest.fn();
      sortByAmount = jest.fn();
      setStartDate = jest.fn();
       setEndDate = jest.fn();
       wrapper=shallow(<ExpenseListFilters
           filters={filters}
           setTextFilter={setTextFilter}
           sortByDate={sortByDate}
           sortByAmount={sortByAmount}
           setStartDate={setStartDate}
           setEndDate={setEndDate}
       />)
});

test('should render ExpenseListFilter correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilter with alt date correctly', () => {
    wrapper.setProps({
        filters:altfilters
    })
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change',()=>{
    const value='rent';
    wrapper.find('input').simulate('change',{
        target:{value}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sortBy date', () => {
        const value = 'date';

     wrapper.setProps({
         filters: altfilters
     })
     wrapper.find('select').simulate('change',{
                target:{value}
     })
     expect(sortByDate).toHaveBeenCalled();
});

test('should sortBy amount', () => {
    const value = 'amount';

    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date change',()=>{
    // const startDate=moment(0).add(4,'years');
    // const endDate=moment(0).add(8,'years');

    // wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate})
    // expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    // expect(setEndDate).toHaveBeenLastCalledWith(endDate);

    wrapper.find('DateRangePicker').prop('onDatesChange')(altfilters)
    expect(setStartDate).toHaveBeenLastCalledWith(altfilters.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(altfilters.endDate);
});

test('should handle date focus changes',()=>{
    // const calendarFocused='endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(null)
    expect(wrapper.state('calendarFocused')).toBe(null)
});


