import { createContext, useContext, useReducer } from "react";

//this is a datalayer
export const StateContext = createContext();

//this is a state provider 
export const StateProvider =({reducer,intialstate,children}) => (
    <StateContext.Provider value={useReducer(reducer,intialstate)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);