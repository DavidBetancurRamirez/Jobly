import { createContext, useState } from "react";
import { axiosPrivate } from "../api/axios";


const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({})
    const storedPersist = localStorage.getItem("persist");
    const [persist, setPersist] = useState(storedPersist !== null ? JSON.parse(storedPersist) : true);

    const signOut = async () => {
        setAuth({})

        try {
            await axiosPrivate("/logout")
        } catch (error) {
            console.error(error)
        }
    }

    const refreshToken = async () => {
        try {
            const response = await axiosPrivate.get("/refresh")
            const { username, accessToken } = response.data

            setAuth(prev => {
                return {
                    ...prev,
                    username,
                    accessToken: response.data.accessToken
                }
            })
    
            return accessToken
        } catch (error) {
            console.error(error)
        }

        return null;        
    }

    return (
        <AuthContext.Provider value={{
            auth,
            persist,
            refreshToken,
            setAuth,
            setPersist,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;