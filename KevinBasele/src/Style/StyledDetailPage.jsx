import styled from 'styled-components'

export const StyledDetailPage = styled.div`
    height: 100vh; 
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    color: #B2B2B2; 
    

    .firstDiv{

        height: 80px; 
        border-bottom: solid; 

        .h2Div{
            position: relative; 
            top: 10px; 
            h2{
            font-size: 0.7rem; 

            }
        }
        .h1Div{
            
            h1{
                font-size: 2rem; 
            }
        }
    }

    div{
        width: 400px; 
        margin: 20px 0px; 
    }

    .buttons{
        width: 380px;
        display: flex; 
        justify-content: space-between;  
    }

`