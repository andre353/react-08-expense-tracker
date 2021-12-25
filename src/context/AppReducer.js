// here we specify the application state changes in response to certain actions to our store/context
const appReducer = (state, action) => {
    // action.type in react can be compared with id in vanilla js
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        default:
            return state;
    }
}

export default appReducer