import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const [loading, setLoading] = useState(true)
    const [auth, setAuth] = useState(null)

    useEffect(() => {
        getAuth().onIdTokenChanged((auth) => {
            setAuth(auth)
            setLoading(false)
        })
    }, [])

    return (
        !loading && (
            !auth ?
                <Navigate to={'/'} replace /> :
                auth?.email.split('@').pop() === "microsoft.com" ?
                    children :
                    <Navigate to={'/preonboarding'} replace />
        )
    )
}

export default ProtectedRoute