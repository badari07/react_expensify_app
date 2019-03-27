const setTextFilter = (text = '') => ({
    type: 'setText_Filter',
    text
});


const sortByAmount = () => ({
    type: 'sortBy_Amount'
});

const sortByDate = () => ({
    type: 'sortBy_Date'
});


const setStartDate = (startDate) => ({
    type: 'start_Date',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'end_Date',
    endDate

});


export {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate}