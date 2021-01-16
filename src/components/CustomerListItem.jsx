import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import FetchKit from '../data/fetchKit'
import Button from './Button'
import {StyledDiv} from '../Style/StyledCustomerListItem'

export default function CustomerListItem() {

    const [ costumerList, setCostumerList] = useState([])

    function getCostumers(){
         FetchKit.getAllCostumersFetch()
        .then(res => res.json())
        .then(data => {
            setCostumerList(data.results)
            console.log(data)
        }) 
        FetchKit.userDetailFetch()
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }
    
    useEffect(()=>{
        getCostumers()
    }, [])

    return (
        <StyledDiv>
            <h1>Companies</h1>
            
            { costumerList.map(item => {
                return (
                        <Link key={item.id} to={`/customers/${item.id}`}>
                            <div>
                                <p> {item.name}</p>
                            </div>
                        </Link>
                )
            })}
            
            <Button label={"add"} to={"/create"} add={true}/>
        </StyledDiv>
    )
}
