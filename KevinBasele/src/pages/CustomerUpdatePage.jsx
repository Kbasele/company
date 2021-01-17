import React from 'react'
import Button from '../components/Button'
import UpdateCustomerForm from '../components/UpdateCustomerForm'
import { StyledDiv } from '../Style/StyledLoginPage'




export default function CustomerUpdatePage(props) {
    const customerId = props.match.params.id
    return (
        <StyledDiv>
            <UpdateCustomerForm props={props}/>
            <Button label={"back"} to={customerId} back={true}/>

        </StyledDiv>
    )
}
