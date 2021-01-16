import React, {useState} from 'react'
import FetchKit from '../data/fetchKit'
import {useHistory} from 'react-router-dom'
import { StyledCreateForm } from '../Style/StyledForms'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCashRegister, faChargingStation, faMailBulk, faPhoneAlt, faSitemap } from '@fortawesome/free-solid-svg-icons'
import { faFirefoxBrowser, faMonero, faVuejs } from '@fortawesome/free-brands-svg-icons'


export default function CreateCostumerForm() {
    const [formData, setFormData ]= useState({})
    const history = useHistory()

    function handleOnChange(e){
        setFormData( {...formData, [e.target.name]: e.target.value})
    }

    function renderInput(icon, name, label, type){
        return (
            <StyledCreateForm>
                <div>
                <span>{icon}</span>
                <input 
                    placeholder ={label}
                    type={type || "text"}
                    name={name} 
                    onChange={handleOnChange}/>
                </div>
            </StyledCreateForm>
        )
    }

    function handleOnSubmit(e){
        e.preventDefault()
        console.log("hej")
        FetchKit.createCostumerFetch(formData)
        .then(res => res.json())
        .then(data => {
            history.push("/homepage")
        })
        
    }

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
                type={"submit"} 
                label={"create"}
                create={true}
                to={"/homepage"}
                handleClick={handleOnSubmit} 
            />
        </form>

    )
}
