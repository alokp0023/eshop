import React, { createContext, useContext, useReducer } from "react";

// Create a context for the state and dispatch functions
export const StateContext = createContext();

// Create a provider component that wraps the app and provides the state and dispatch functions to child components
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Export a hook to access the state and dispatch functions in child components
export const useStateValue = () => useContext(StateContext);
