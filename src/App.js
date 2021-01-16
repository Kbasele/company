import {Switch, Route, useHistory} from 'react-router-dom'
import SideBar from './components/SideBar';
import { UserContext } from './contexts/UserContext';
import CreatePage from './pages/CreateCostumerPage';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomerUpdatePage from './pages/CustomerUpdatePage';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import {useState, useEffect} from 'react'
import { StyledContainer } from './Style/StyledContainer';
import LandingPage from './pages/LandingPage';


function App() {
  const [isToken, setIsToken] = useState(Boolean)  
  const [userObj, setUserObj] = useState({})
  const token = localStorage.getItem("USERTOKEN")
  const history = useHistory()

  useEffect(()=>{ 
    if(token){
      console.log(token)
        setIsToken(true)
    }
    
}, [setIsToken])

  return (
    <StyledContainer isToken={isToken}>
      <UserContext.Provider value={{isToken, setIsToken, userObj, setUserObj}}>
      {token && <SideBar token={token}/>}
      <div className="main-content">
        <Switch>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/homepage">
            <HomePage/>
          </Route>
          <Route path="/create">
            <CreatePage/>
          </Route>

          <Route path="/customers/:id/edit" component={CustomerUpdatePage}/>
          <Route path="/customers/:id" component={CustomerDetailPage}/>
          <Route path={"/"}>
            
            <LandingPage/>
          </Route>
        </Switch>

      </div>
      </UserContext.Provider>
    </StyledContainer>
  );
}

export default App;
