import React, { createContext, useReducer } from 'react';
import appReducer from './AppReducer';

// Initial state
const initialState = {
    transactions: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    // state is the object that contains the appReducer file fields
    // dispatch = actions arriving to the AppReducer.js
    const [state, dispatch] = useReducer(appReducer, initialState);

    // actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }



    return (<GlobalContext.Provider value={{
        // this is the way to access states fields from any component by means of hook
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
    }}>{children}</GlobalContext.Provider>)
}