import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import decodeJwt from '../utils/decodeJwt';

const Google = () => {
    const [email, setEmail] = useState(null)

    const handleError = () => {
        console.log("Login failed")
    }

    const handleSuccess = (credentialResponse) => {
        console.log("credentialResponse", credentialResponse)
        if (credentialResponse.credential) {
            const { payload } = decodeJwt(credentialResponse.credential)
            console.log("Payload credential", payload)
            setEmail(payload)
        }
    }

    return (
        <GoogleLogin 
            useOneTap
            onError={handleError} 
            onSuccess={handleSuccess}
        />
    )
}

export default Google;