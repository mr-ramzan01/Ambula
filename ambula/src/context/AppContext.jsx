import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider  = ({children}) => {
    const [todos, setTodos] = useState([]);

    return <AppContext.Provider value={{todos, setTodos}}>{children}</AppContext.Provider>
} 