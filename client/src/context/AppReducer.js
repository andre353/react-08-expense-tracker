// here we specify the application state changes in response to certain actions to our store/context
//                         action takes in the dispatch object fields as its properties: action.type, action.payload
const appReducer = (state, action) => {
    // action.type in react can be compared with id in vanilla js
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state, // initial state
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state, // initial state
                transactions: [action.payload, ...state.transactions], // the newly added transaction will always be the first in the new state array
            }
        default:
            return state;
    }
}

export default appReducer