import Cookies from 'js-cookie';
import { BASE_URL, axiosPrivate } from "../api/axios";
import { createContext, useState } from "react";

const urlBase = BASE_URL.register

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({})
    const storedPersist = localStorage.getItem("persist");
    const [persist, setPersist] = useState(storedPersist ? true : JSON.parse(storedPersist));

    const signIn = async ({ email, password, persist, admin }) => {
        const path = admin
                        ? urlBase + 'admin/validate_login'
                        : urlBase + 'provider/validate_login'

        const response = await axiosPrivate.post(
            path,
            JSON.stringify({ 
                email, 
                password 
            })
        );

        if (!response.data) return false;

        const { name, role } = response.data
        setAuth({ 
            name,
            role,
            access: true
        })

        localStorage.setItem("persist", persist)

        return true;
    }

    const signUp = async ({ name, email, password, persist, admin}) => {
        const response = await axiosPrivate.post(
            urlBase + 'provider/register',
            JSON.stringify({ 
                name, 
                email, 
                password 
            })
        );
        
        if (response.statusText != "Created") return false;

        return await signIn({ email, password, persist, admin });
    }

    const signOut = async () => {
        Cookies.remove('R_Token');
        Cookies.remove('A_Token');

        setAuth({});
    }

    const refreshToken = async () => {
        try {
            if (!Cookies.get('R_Token')) return null

            const response = await axiosPrivate.post(
                urlBase + "new_token"
            )
            const { name, role } = response.data

            setAuth({
                name,
                role,
                access: true
            })
            
            return true
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