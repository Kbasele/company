import React from 'react'
import Button from '../components/Button'
import CreateCostumerForm from '../components/CreateCostumerForm'
import { StyledDiv } from '../Style/StyledLoginPage'

export default function CreatePage() {

    return (
        <StyledDiv>
            <CreateCostumerForm/>
            <Button label={"back"} to={"/homepage"} back={true}/>
        </StyledDiv>
    )
}
