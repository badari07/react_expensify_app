import moment from 'moment';
import  {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../../actions/filters';


test('should genarate set start date action pbject',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        
            type: 'start_Date',
            startDate:moment(0)
        
    })

});

test('should genarate set end date action pbject', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
      type: "end_Date",
      endDate: moment(0)
    });

});

 test('should genarate sortBy amount action pbject', () => {
     const action = sortByAmount();
     expect(action).toEqual({
       type: "sortBy_Amount"
     });


 });

 test('should genarate sortBy date action pbject', () => {
     const action = sortByDate();
     expect(action).toEqual({
         type: "sortBy_Date"
     });

});

test('should genarate set text filter action pbject', () => {
    const action = setTextFilter('test');
    expect(action).toEqual({
        
            type: 'setText_Filter',
            text:'test'
    })


 });

 test('should genarate set default text filter action pbject', () => {
     const action = setTextFilter();
     expect(action).toEqual({

         type: 'setText_Filter',
         text: ''
     })


 });
