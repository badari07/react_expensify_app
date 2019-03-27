import moment from 'moment';

const filtersReducersDefault = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};


export default (state = filtersReducersDefault, action) => {
    switch (action.type) {

        case 'setText_Filter':
            return {
                ...state,
                text: action.text
            };
        case 'sortBy_Amount':
            return {
                ...state,
                sortBy: 'amount'
            }

        case 'sortBy_Date':
            return {
                ...state,
                sortBy: 'date'
            }

        case 'start_Date':
            return {
                ...state,
                startDate: action.startDate
            };

        case 'end_Date':
            return {
                ...state,
                endDate: action.endDate
            };

        default:
            return state
    }

}

