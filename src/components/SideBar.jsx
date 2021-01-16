import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { StyledSideBar } from '../Style/StyledSideBar'
import Button from './Button'
import {UserContext} from '../contexts/UserContext'


export default function SideBar() {
    const {userObj} = useContext(UserContext)

    return (
        <StyledSideBar>
            <div>
                <h1>Welcome</h1>
            </div>

            <ul>

                <li>
                    <Link to="/homepage">Home</Link>
                </li>
                <li>
                    <Link to="/create">create</Link>
                </li>
            </ul>
                <h2>{userObj.firstName} {userObj.lastName} </h2>
                <p> {userObj.email}</p>
            <Button label={"LOG OUT"} to={"/login"} logOut={true} />
        </StyledSideBar>
    )
}
