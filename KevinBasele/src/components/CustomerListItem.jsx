import React, { useEffect, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import FetchKit from '../data/FetchKit'
import Button from './Button'
import {StyledDiv} from '../Style/StyledCustomerListItem'
import {UserContext} from '../contexts/UserContext'



export default function CustomerListItem() {
    const history = useHistory()
    const { customerList, setAuth, setCustomerList, isUpToDate, setIsUpToDate} = useContext(UserContext)
    const token = localStorage.getItem("USERTOKEN")
    

    useEffect(()=>{
        if( !isUpToDate ){
            setAuth(true)
            FetchKit.getAllCostumersFetch(token)
            .then(res => res.json())
            .then(data => {
                setCustomerList(data.results)
                console.log("uppdaterad")
                setIsUpToDate(true)
                
            })              
        }

        else if(!token){
            history.push("/login")
        }
    },[])

    return (
        <StyledDiv >
            { customerList ? 
                customerList.map(item =>{
                    return (
                    <Link  key={item.id} to={`/customers/${item.id}`}>
                        <div>
                            <p> {item.name}</p>
                        </div>
                    </Link>
                    )
                })
            :
                <h1>LOADING</h1>
            }      
            <Button label={"add"} to={"/create"} add={true}/>
        </StyledDiv>
    )
}
