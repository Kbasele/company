import React, {useState, useEffect, useContext, useRef} from 'react'
import FetchKit from '../data/FetchKit'
import {useHistory} from 'react-router-dom'
import { StyledCreateForm } from '../Style/StyledForms'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCashRegister, faMailBulk, faPhoneAlt, faSitemap } from '@fortawesome/free-solid-svg-icons'
import { faFirefoxBrowser, faMonero, faVuejs } from '@fortawesome/free-brands-svg-icons'
import {UserContext} from '../contexts/UserContext'


export default function CreateCostumerForm() {
    const [formData, setFormData ]= useState({})
    const history = useHistory()
    const { setIsUpToDate} = useContext(UserContext)
    const TOKEN = localStorage.getItem("USERTOKEN")
    const refName = useRef()
    const refVat = useRef()



    useEffect(()=>{
        if(!localStorage.getItem("USERTOKEN")){
            history.push("/login")
        }
    },[history])

    function handleOnChange(e){
        setFormData( {...formData, [e.target.name]: e.target.value})
        if(e.target.name == "name") console.log(e.target.value)
        if(e.target.name.length>0){
            refName.current.style.color = "#B2B2B2"
        }
    }

    function renderInput(icon, name, label, type, ref){
        return (
                <div>
                <span>{icon}</span>
                <input 
                    placeholder ={label}
                    type={type || "text"}
                    name={name} 
                    onChange={handleOnChange}
                    ref ={ref}
                    />
                </div>
        )
    }

    function handleOnSubmit(e){
        const vat = /SE\d{10}/
        e.preventDefault()
        
        if(formData.name && (vat.test(formData.vatNr))){
            setIsUpToDate(false)
            FetchKit.createCostumerFetch(formData,TOKEN)
            .then(res => res.json())
            .then(data => {
                history.push("/homepage")
            })
        }

        else{
            console.log(refVat)
            if(!formData.name) refName.current.style.color = "#ff0000"
            if(!vat.test(formData.vatNr)) refVat.current.style.color = "#ff0000"
        }
        
    }

    return (
        <StyledCreateForm onSubmit={handleOnSubmit}>
            {renderInput(<FontAwesomeIcon icon={faBuilding}/>,"name", "Organisation Name", "", refName)}
            {renderInput(<FontAwesomeIcon icon={faSitemap}/>,"organisationNr", "Organisation Number")}
            {renderInput(<FontAwesomeIcon icon={faVuejs}/>, "vatNr", "VAT number","", refVat)}
            {renderInput(<FontAwesomeIcon icon={faMonero}/>, "reference", "Reference")}
            {renderInput(<FontAwesomeIcon icon={faCashRegister}/>, "paymentTerm", "Payment Term", "number")}
            {renderInput(<FontAwesomeIcon icon={faFirefoxBrowser}/>, "website", "website", "url")}
            {renderInput(<FontAwesomeIcon icon={faMailBulk}/>, "email", "Email", "email")}
            {renderInput(<FontAwesomeIcon icon={faPhoneAlt}/>, "phoneNumber", "tel")}
            <Button 
                type={"submit"} 
                label={"create"}
                create={true}
                to={"/homepage"}
            />
        </StyledCreateForm>

    )
}
