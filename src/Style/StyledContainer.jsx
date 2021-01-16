import styled, {css} from 'styled-components'

export const StyledContainer = styled.div`

${({isLogedIn}) => isLogedIn &&
    css`
    display: flex; 
    .main-content{
        height: 100vh; 
        width: 85vw; 
    }
    
    ` }
`