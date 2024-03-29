import { createContext, useState } from "react";
import axios from "../api/axios";


const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({})
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem("persist")) || false)

    const signOut = async () => {
        setAuth({})

        try {
            await axios("/logout", {
                withCredentials: true
            })
        } catch (error) {
            console.error(error)
        }
    }

    const refreshToken = async () => {
        try {
            const response = await axios.get("/refresh")
    
            setAuth({
                name: response.data.username,
                accessToken: response.data.accessToken
            })
    
            return response.data.accessToken
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

/*
export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [accessToken, setAccessToken] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(undefined)

    useEffect(() => {
        checkAuth()
    }, [])

    const requestNewAccessToken = async (refreshToken) => {
        try {
            // Cambiar por axios
            const response = await fetch(`${API_URL}/refresh-token`, {
                method: "Post",
                headers: {
                    "Content-Type": "application/json",
                    Autorization: `Bearer ${refreshToken}`
                }
            })

            if (response.ok) {
                const json = await response.json()

                if (json.error) {
                    throw new Error(json.error)
                }

                return json.body.accessToken
            } else {
                throw new Error(response.statusText)
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }

    const getUserInfo = async (accessToken) => {
        try {
            // Cambiar por axios
            const response = await fetch(`${API_URL}/user`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Autorization: `Bearer ${accessToken}`
                }
            })

            if (response.ok) {
                const json = await response.json()

                if (json.error) {
                    throw new Error(json.error)
                }

                return json.body
            } else {
                throw new Error(response.statusText)
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }

    const checkAuth = async () => {
        if (accessToken) {
            const userInfo = await getUserInfo(accessToken)

            if (userInfo) {
                saveSesionInfo(userInfo, accessToken, getRefreshToken()) 
            }

        } else {
            const token = getRefreshToken()

            if (token) {
                const newAccessToken = await requestNewAccessToken(token)

                if (newAccessToken) {
                    const userInfo = await getUserInfo(newAccessToken)

                    if (userInfo) {
                        saveSesionInfo(userInfo, newAccessToken, token) 
                    }
                }
            }
        }
        setIsLoading(false)
    }

    const saveSesionInfo = (userInfo, accessToken, refreshToken) => {
        setAccessToken(accessToken)
        localStorage.setItem("token", JSON.stringify(refreshToken))
        setUser(userInfo)

        setIsAuthenticated(true)
    }

    const getAccessToken = () => {
        return accessToken
    }

    const getUser = () => {
        return user
    }

    const getRefreshToken = () => {
        const token = localStorage.getItem("token")

        if (!token) return null
        
        const { refreshToken } = JSON.parse(token)
        return refreshToken
    }

    const saveUser = (userData) => {
        saveSesionInfo(
            userData.body.user, 
            userData.body.accessToken, 
            userData.body.refreshToken
        )
    }

    const signOut = async () => {
        try {
            const response = await fetch(`${API_URL}/sign-out`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Autorization: `Bearer ${getRefreshToken()}`
                }
            })

            if (response.ok) {
                setIsAuthenticated(false)
                setAccessToken("")
                setUser(undefined)
                localStorage.removeItem("token")
            }
        } catch (error) {
            console.log("Error cerrando sesion")
        }
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            getAccessToken,
            getUser,
            getRefreshToken,
            saveUser,
            signOut
        }}>
            {isLoading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    )
}
*/