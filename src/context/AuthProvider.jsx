import { createContext, useState } from "react";
import { axiosPrivate } from "../api/axios";


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({})
    const storedPersist = localStorage.getItem("persist");
    const [persist, setPersist] = useState(storedPersist !== null ? JSON.parse(storedPersist) : true);

    const signIn = async ({ username, pwd, persist, path}) => {
        const response = await axiosPrivate.post(
            path,
            JSON.stringify({ username, pwd })
        );

        console.log(response)

        if (!response.data) return false;

        const { accessToken, roles } = response.data
        setAuth({ 
            username, 
            accessToken,
            roles
        })

        localStorage.setItem("persist", persist)

        return true;
    }

    const signUp = async ({ username, email, pwd, persist, path}) => {
        const response = await axiosPrivate.post(
            path,
            JSON.stringify({ username, email, pwd })
        );

        console.log(response)

        return response.data;
    }

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
            const { username, accessToken, roles } = response.data

            setAuth({
                username,
                accessToken,
                roles
            })
    
            return accessToken
        } catch (error) {
            if (error?.response?.status != 401) {
                console.error(error)
            }
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
            signIn,
            signUp,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;