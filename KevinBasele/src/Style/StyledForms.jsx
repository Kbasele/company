import styled from 'styled-components'

export const StyledForm = styled.form`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    color: #B2B2B2;
    
    div{
        display: flex; 
        align-items: center; 
        font-size: 2rem;
        font-weight: 700; 
        width: 496px; 
        margin-bottom: 37px; 

        span{
            margin: 0 40px; 
        }

        input{
            color: #B2B2B2;
            border: none; 
            font-size: 2rem;
            font-weight: 600; 
            width: 360px;  
            outline: none;
        }
    }
`

export const StyledLogInForm = styled(StyledForm)`
    div{
        background: #F6F6F6; 
        height: 85px; 
        border-radius: 135px; 

        input{
            background: #F6F6F6; 
            font-size: 1.4rem; 
            font-weight: 600; 
        }

        input:placeholder-shown {
            font-size: 2rem;
        }
    }
`
export const StyledCreateForm = styled(StyledForm)`
    
    margin-bottom: 20px; 
    
    div{
        
        height: 60px; 
        border-bottom: solid; 
        input{

        }

        span{
            margin: 0 10px; 
        }

        input{
            margin: 30px; 
        }
        
    }


`
