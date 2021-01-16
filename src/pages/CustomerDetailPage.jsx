import React, {useState, useEffect} from 'react'
import FetchKit from '../data/fetchKit'
import {useHistory} from 'react-router-dom'
import Button from '../components/Button'
import {StyledDetailPage} from '../Style/StyledDetailPage'

export default function CustomerDetailPage(props) {
    const history = useHistory()
    const [customerItem, setCustomerItem] = useState(null)
    const customerId = props.match.params.id
    const Token = localStorage.getItem("USERTOKEN")


    function deleteCustomerItem(){
        FetchKit.deleteCostumerItemFetch(customerId)
        .then(() => history.push("/homepage"))
    }

    useEffect(()=>{
        FetchKit.getCostumerItemFetch(customerId, Token)
        .then(res => res.json())
        .then(data => setCustomerItem(data))
    }, [customerId])

    function handleOnClick(){
        deleteCustomerItem()
    }

    console.log(customerItem)

    return (
        
        <StyledDetailPage>
            {customerItem ? 
            <div>
                {Object.entries(customerItem).map((item, index) =>{
                    if(item[0] !== "id" && item[0] !== "parent" && item[0] !== "address"){
                        return ( 
                                <div key={index}  className={"firstDiv"}>
                                    <div className="h2Div">
                                        <h2>{item[0]}</h2>
                                    </div>
                                    <div className="h1Div">
                                        <h1>{item[1]}</h1>
                                    </div>
                                </div>
                            )
                        }
                    })}
            </div>
            
            : 
            <h1>loading</h1> 
            }

            <div className={"buttons"}>
                <Button label={"Delete"} del={handleOnClick}/>
                <Button label={"edit"} to={`/customers/${customerId}/edit`} edit={true}/>
            </div>
                <Button label={"back"} to={"/homepage"} back={true}/>
        </StyledDetailPage>
    )
}
