import styled from 'styled-components'

export const StyledSideBar = styled.div`
    width: 15vw; 
    background: #9DD1F1; 
    display: flex; 
    align-items: center; 
    flex-direction: column; 

    h1{
        color: #BA1200; 
        margin: 50px 0 100px; 
    }
    
    ul{
        color: white; 
        list-style: none; 
        font-size: 1.3rem;
        
        li{
            margin-bottom: 50px; 
            
        }
        
        a{  
            
            color: white; 
            text-decoration: none; 
        }
    }

    Button{
        position: relative; 
        top: 65vh; 
    }
`