const expenseReducersDefault = [];

export default (state = expenseReducersDefault, action) => {
    switch (action.type) {
        case 'add_Expense':
            return [...state, action.expense];

        case 'remove_Expense':
            return state.filter(({
                id
            }) => id !== action.id);

        case 'edit_Expense':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                }else{
                    return expense;
                }

            });

        default:
            return state
    }
}

