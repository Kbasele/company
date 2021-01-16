import React from 'react'
import LoginForm from '../components/LoginForm'
import {StyledDiv} from '../Style/StyledLoginPage'


export default function LoginPage() {

    return (
        <StyledDiv>
            <h1>Sign In</h1>
            <LoginForm/>
        </StyledDiv>
    )
}
