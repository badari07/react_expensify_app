import React from 'react'; 
import { connect } from "react-redux";
import {setTextFilter,sortByAmount,sortByDate,setEndDate,setStartDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';


export class ExpenseListFilters extends React.Component{
    state={
        calendarFocused:null
    };

    onDatesChange=({startDate, endDate})=>{
            this.props.setStartDate(startDate);
            this.props.setEndDate(endDate);

    };

    onFocusChange=(calendarFocused)=>{
        this.setState(()=>({calendarFocused}))
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    onSortChange = (e) => {
        if (e.target.value === 'amount') {
            this.props.sortByAmount()
        } else if (e.target.value === 'date') {
            this.props.sortByDate()
        }
    }
    
        render(){
            return (
                 <div className='content-container'>
                    <div className='input-group'>
                        <div className='input-group__item'>
                        <input type="text" className='text-input' placeholder='search expenses'
                    value={this.props.filters.text} 
                    onChange={this.onTextChange} />
                    </div>

                        <div className='input-group__item'>
                            <select className='select' value={this.props.filters.sortBy} 
                        onChange={this.onSortChange}>
                            <option value='date'>date</option>
                            <option value='amount'>amount</option>
                         </select>
                        </div>

                    <div className='input-group__item'>
                        <DateRangePicker
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                    />
                        </div>
                    </div>
                    
                   
                   
            </div>
             );
        }
    }

const mapStateToProps = (state) => ({
    filters: state.filters
})
   

const mapDispatchToProps=(dispatch,props)=>({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))

})

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);