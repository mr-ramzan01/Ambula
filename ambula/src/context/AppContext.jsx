import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider  = ({children}) => {
    const [todos, setTodos] = useState([]);
    const [cart, setCart] = useState([]);

    return <AppContext.Provider value={{todos, setTodos, cart, setCart}}>{children}</AppContext.Provider>
} 