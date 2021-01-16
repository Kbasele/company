import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import {  StyledLogInButton, StyledLogOutButton, StyledAddButton, StyledSmallButton } from '../Style/StyledButtons'

export default function Button({handleClick, label, del, logOut, to, create, login, back, edit, add, update}) {
    const history = useHistory()
    function logOut(){
        localStorage.clear();
        history.push("/login")
    }

    return (
        <>
            {login && 
                <StyledLogInButton login={true}>
                    {label}
                </StyledLogInButton>
            }
            
            {del && 
            <StyledSmallButton onClick={del} del={true}>
                    {label}
            </StyledSmallButton>
            }

            {logOut && 
                    <StyledLogOutButton logOut={true} onClick={logOut}>
                        {label}
                    </StyledLogOutButton>
            }
            {create && 
                <Link to={to}>
                    <StyledSmallButton onClick={handleClick} create={true}>
                            {label}
                    </StyledSmallButton>
                </Link>
            }
            {add && 
                <Link to={to}>
                    <StyledAddButton add={true}>
                            {label}
                    </StyledAddButton>
                </Link>
            }
            {back && 
                <Link to={to}>
                    <StyledSmallButton back={true}>
                            {label}
                    </StyledSmallButton>
                </Link>
            }
            {edit && 
                <Link to={to}>
                    <StyledSmallButton edit={true}>
                            {label}
                    </StyledSmallButton>
                </Link>
            }  

            {update && 
                <Link to={to}>
                    <StyledSmallButton onClick={handleClick} update={true}>
                            {label}
                    </StyledSmallButton>
                </Link>
            }   
        </>
    )
}
