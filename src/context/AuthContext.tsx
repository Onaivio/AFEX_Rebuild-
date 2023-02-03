import { createContext, useState } from "react";
import profile from '../assets/images/profile.png'

type Props = {
    children: React.ReactNode
}

export const AuthContext = createContext<{} | null>(null)

const AuthContextProvider: React.FC<Props> = ({ children }) => {
    const user = {
        fname: 'Mercy',
        profPix: profile
    }
    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
