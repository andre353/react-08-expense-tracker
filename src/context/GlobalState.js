import React, { createContext, useReducer } from 'react'
import appReducer from './AppReducer'

// Initial state
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
    // state is the object that contains the appReducer file fields
    const [state, dispatch] = useReducer(appReducer, initialState)

    return (<GlobalContext.Provider value={{
        // this is the way to access states fields from any component by means of hook
        transactions: state.transactions
    }}>{children}</GlobalContext.Provider>)
}