import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export default function LandingPage() {
    const history = useHistory()

    useEffect(()=>{
        history.push("/login")
    }, [history])

    
    return (
        <div>
            
        </div>
    )
}
