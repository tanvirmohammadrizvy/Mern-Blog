import { createContext, useReducer } from "react";
import './Reducer'

const INITIAL_STATE {
    user:null,
    isFetching:false,
    error:false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
    
}