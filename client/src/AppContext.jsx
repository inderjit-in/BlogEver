import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppContextProvider = ({children}) =>{

    const [UserLoginStatus, SetUserLoginStatus] = useState(false)

    const value = {
        UserLoginStatus, SetUserLoginStatus
    }

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}