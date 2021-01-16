import React, {useState, useEffect, useContext} from 'react'
import FetchKit from '../data/fetchKit'
import {useHistory} from 'react-router-dom'
import {StyledLogInForm} from '../Style/StyledForms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import {UserContext} from '../contexts/UserContext'
import Button from './Button'




export default function LoginForm() {
    const history = useHistory()
    const {setIsToken, isToken, setUserObj} = useContext(UserContext)


    useEffect(()=>{ 
        if(localStorage.getItem("USERTOKEN")){
            setIsToken(true)
            history.push("/homePage")
        }
        else{
            setIsToken(false)
        }
        
    }, [setIsToken])
    
    const [formData, setFormData] = useState({
        email: "kevin.basele@yh.nackademin.se", 
        password: "javascriptoramverk"
    })
    
    const payload = {
        email: formData.email, 
        password: formData.password
    }

    function handleOnChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
        
    }

    function handleOnSubmit(e){
        e.preventDefault()
        FetchKit.loginFetch(payload)
        .then(res => res.json())
        .then(data =>{
            localStorage.setItem("USERTOKEN", data.token)
            setIsToken(true)  
            
            history.push("/homepage");            
        })
    }
    
    return (
        <div>
            <StyledLogInForm  onSubmit={handleOnSubmit}>
                <div>
                    <span><FontAwesomeIcon icon={faUser}/></span>
                    <input name="email" onChange={handleOnChange} placeholder={"Email"} />
                </div>
                <div>
                <span><FontAwesomeIcon icon={faLock}/></span>   
                <input name="password" onChange={handleOnChange} placeholder={"Password"} />
                </div>
                <Button login={true} label={"LOG IN"}/>
            </StyledLogInForm>
        </div>
    )
}
