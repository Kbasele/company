import styled from 'styled-components'

export const StyledDiv = styled.div`
    height: 100vh;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    flex-flow: column;  
    
    div{
        width: 500px;
        height: 80px;
        display: flex; 
        align-items: center; 
        margin: 20px; 
        font-size: 3rem;
        font-weight: 700;    
        background: #F6F6F6;
        padding: 0 20px; 
        border-radius: 8px; 
        transition: 0.4s; 
        box-shadow: 0 3px 7px 1px  rgba(0, 0, 0, 0.2);


        :hover{
            transform: scale(1.05) ;
        }
        
    }
    a{
        text-decoration: none; 
        color: #031927; 
    }
    `