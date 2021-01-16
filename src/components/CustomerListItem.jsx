import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import FetchKit from '../data/fetchKit'
import Button from './Button'
import {StyledDiv} from '../Style/StyledCustomerListItem'
import {UserContext} from '../contexts/UserContext'


export default function CustomerListItem() {

    const [ costumerList, setCostumerList] = useState([])
    const {setIsToken, isToken} = useContext(UserContext)
    const Token = localStorage.getItem("USERTOKEN")

    useEffect(()=>{
        if(localStorage.getItem("USERTOKEN")){
            setIsToken(true)

            FetchKit.getAllCostumersFetch()
            .then(res => res.json())
            .then(data => {
                setCostumerList(data.results)
            }) 
        }
    },)

    return (
        <StyledDiv>
            { costumerList ? 
                costumerList.map(item =>{
                    return (
                    <Link key={item.id} to={`/customers/${item.id}`}>
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
