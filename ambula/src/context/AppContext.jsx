import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider  = ({children}) => {
    const [cross, setCross] = useState(true);
    const handleCross = () => {
        setCross(false);
    }
    return <AppContext.Provider value={{cross, handleCross}}>{children}</AppContext.Provider>
} 