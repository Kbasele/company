import React, {useState, useEffect, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import FetchKit from '../data/FetchKit'
import Button from './Button'
import { StyledCreateForm } from '../Style/StyledForms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCashRegister, faMailBulk, faPhoneAlt, faSitemap } from '@fortawesome/free-solid-svg-icons'
import { faFirefoxBrowser, faMonero, faVuejs } from '@fortawesome/free-brands-svg-icons'
import {UserContext} from '../contexts/UserContext'




export default function UpdateCustomerForm({props}) {
    const [formData, setFormData] = useState({})
    const history = useHistory()
    const customerId = props.match.params.id
    const { setIsUpToDate, customerList} = useContext(UserContext)
    const token = localStorage.getItem("USERTOKEN")

    

    function handleOnChange(e){
        setFormData( {...formData, [e.target.name]: e.target.value})
    }

    function handleOnSubmit(e){
        e.preventDefault()
        FetchKit.updateCostumerItemFetch(customerId, formData, token)
        .then(res => res.json())
        .then(data => {
            setIsUpToDate(false)
            history.push("/homepage")
        }) 
    }

    function renderInput(icon, name, label, type){
        return (
                <div>
                    <span>{icon}</span>
                    <input 
                        placeholder={label}
                        type={type || "text"}
                        name={name} 
                        value={formData[name] || ""}
                        onChange={handleOnChange}
                        />
                </div>
        )
    }

    function findIndex(){
        for(let i = 0; i < customerList.length; ++i){
            if(customerList[i].id === Number(customerId)){
                return i
            }
        }
    } 
    
    useEffect(()=>{
        if(!localStorage.getItem("USERTOKEN")) {history.push("/login")}
        setFormData(customerList[findIndex()])
        
    }, [customerId])

    return (
            <StyledCreateForm>
                {renderInput(<FontAwesomeIcon icon={faBuilding}/>,"name", "Organisation Name")}
                {renderInput(<FontAwesomeIcon icon={faSitemap}/>,"organisationNr", "Organisation Number")}
                {renderInput(<FontAwesomeIcon icon={faVuejs}/>, "vatNr", "VAT number")}
                {renderInput(<FontAwesomeIcon icon={faMonero}/>, "reference", "Reference")}
                {renderInput(<FontAwesomeIcon icon={faCashRegister}/>, "paymentTerm", "Payment Term")}
                {renderInput(<FontAwesomeIcon icon={faFirefoxBrowser}/>, "website", "website", "url")}
                {renderInput(<FontAwesomeIcon icon={faMailBulk}/>, "email", "Email")}
                {renderInput(<FontAwesomeIcon icon={faPhoneAlt}/>, "phoneNumber", "tel")}
                <Button 
                    handleClick={handleOnSubmit} 
                    update={true} 
                    label={"update"}/>
            </StyledCreateForm>
    )
}
