import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import Loader from "./Loader" 

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

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`)
        console.log(`aT: ${JSON.stringify(auth?.accessToken)}`)
    }, [isLoading])

    return (
        !persist
            ? <Outlet />
            : isLoading
                ? <Loader />
                : <Outlet />
    )
}

export default PersistLogin