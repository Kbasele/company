import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import FetchKit from '../data/fetchKit'
import Button from './Button'
import { StyledCreateForm } from '../Style/StyledForms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCashRegister, faMailBulk, faPhoneAlt, faSitemap } from '@fortawesome/free-solid-svg-icons'
import { faFirefoxBrowser, faMonero, faVuejs } from '@fortawesome/free-brands-svg-icons'



export default function UpdateCustomerForm({props}) {
    const [formData, setFormData] = useState({})
    const history = useHistory()
    const customerId = props.match.params.id

    function handleOnChange(e){
        setFormData( {...formData, [e.target.name]: e.target.value})
    }

    function handleOnSubmit(e){
        e.preventDefault()
        FetchKit.updateCostumerItemFetch(customerId, formData)
        .then(res => res.json())
        .then(data => {
            history.push("/homepage")
        })
        
    }

    function renderInput(icon, name, label, type){
        return (
            <StyledCreateForm>
                <div>
                    <span>{icon}</span>
                    <input 
                        placeholder={label}
                        type={type || "text"}
                        name={name} 
                        value={formData[name]}
                        onChange={handleOnChange}
                        />
                </div>
            </StyledCreateForm>
        )
    }
    
    useEffect(()=>{
        FetchKit.getCostumerItemFetch(customerId)
        .then(res => res.json())
        .then(data => setFormData(data))
    }, [customerId])

    return (
            <form>
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
            </form>
    )
}
