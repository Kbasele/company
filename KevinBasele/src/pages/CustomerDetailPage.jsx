import React, {useState, useEffect, useContext} from 'react'
import FetchKit from '../data/FetchKit'
import {useHistory} from 'react-router-dom'
import Button from '../components/Button'
import {StyledDetailPage} from '../Style/StyledDetailPage'
import {UserContext} from '../contexts/UserContext'


export default function CustomerDetailPage(props) {
    const history = useHistory()

    const customerId = props.match.params.id
    const [customerData ] = useState({})
    const { setIsUpToDate, customerList} = useContext(UserContext)
    const token = localStorage.getItem("USERTOKEN")



    function deleteCustomerItem(){
        FetchKit.deleteCostumerItemFetch(customerId, token)
        .then(() => history.push("/homepage"))
        setIsUpToDate(false)
    }

    function findIndex(){
        if(customerList){
            for(let i = 0; i < customerList.length; ++i){
                if(customerList[i].id === Number(customerId)){
                    return i
                }
            }

        }
    } 

    useEffect(()=>{
        if(localStorage.getItem("USERTOKEN")){

        }
        else{
            history.push("/login")
        }
    },[])

    function handleOnClick(){
        deleteCustomerItem()
    }

    return (
        
        <StyledDetailPage>
            {customerData ? 
            
            <div>
                {Object.entries(customerList[findIndex()]).map((item, index) =>{
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
                        else return ""
                    })}
                    
            </div> 

            
            : 
            <h1>loading</h1> 
            }

            <div className={"buttons"}>
                <Button label={"Delete"} del={handleOnClick}/>
                <Button label={"edit"} edit={true} to={`/customers/${customerId}/edit`} />
            </div>
                <Button label={"back"} to={"/homepage"} back={true}/>
        </StyledDetailPage>
    )
}
