import Loader from "../../elements/Loader" 
import useAuth from '../../hooks/useAuth'
import { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom"

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true)
    const { auth, persist, refreshToken } = useAuth()

    useEffect(() => {
        let isMounted = true

        const verifyRefreshToken = async () => {
            try {
                await refreshToken()
            } catch (error) {
                console.error(error)
            } finally {
                isMounted && setIsLoading(false)
            }
        }

        persist && !auth?.accessToken ?  verifyRefreshToken() : setIsLoading(false)

        return () => isMounted = false
    }, [])

    return (
        !persist
            ? <Outlet />
            : isLoading
                ? <Loader />
                : <Outlet />
    )
}

export default PersistLogin