import styled, {css} from 'styled-components'

const StyledButton = styled.button`
    border-radius: 4px; 
    transition: .4s; 
    border: none; 
    color: white; 
    cursor: pointer;
  
`
export const StyledLogInButton = styled(StyledButton)`

    a{
    color: white; 
    text-decoration: none; 
    }
    
    ${({login}) => login &&
    css`
        background: #9DD1F1; 
        width: 302px; 
        height: 60px; 
        font-size: 24px; 
        font-weight: 800; 

        :hover{
            background: #7cc3f0; 
        }
    `}
`

export const StyledLogOutButton = styled(StyledLogInButton)`

    font-size: 1.5rem; 
    font-weight: 700; 
    background: none; 


`
export const StyledAddButton = styled(StyledButton)`
    height: 70px; 
    width: 70px;
    border-radius: 100%; 
    background: #9DD1F1; 
    font-size: 1rem; 
    font-weight: 600; 
    
`
export const StyledSmallButton = styled(StyledButton)`

    height: 30px; 
    width: 50px;
    font-size: 1rem; 
    font-weight: 600; 

    ${({create}) =>create &&
        css`
            background: #9DD1F1; 
            float: right;  
        `
    }

    ${({del}) =>del &&
        css`
            background: #BA1200; 
        `
    }
    ${({back}) =>back &&
        css`
            background: #031927; 
        `
    }
    ${({edit}) =>edit &&
        css`
            background: #9DD1F1; 
        `
    }
    ${({update}) =>update &&
        css`
            float: right; 
            background: #9DD1F1; 
        `
    }

`
