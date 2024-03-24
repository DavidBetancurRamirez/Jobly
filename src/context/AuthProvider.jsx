import { useContext, createContext, useState, useEffect } from "react";
import { API_URL } from "../utils/constants";


const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

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

    const getUserInfo = async (refreshToken) => {
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
        
        const { refreshToken } = JSON.parse()
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
