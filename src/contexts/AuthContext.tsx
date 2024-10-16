import React, { createContext, ReactNode, useContext } from "react";

interface AuthProviderProps {children: ReactNode}
interface AuthContextType {isLoggedIn: boolean, setIsLoggedIn:  React.Dispatch<React.SetStateAction<boolean>>}
const AuthContext = createContext<AuthContextType|undefined>(undefined);



export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {const context = useContext(AuthContext)
    if(!context){
        throw new Error()
    }
    return context
}