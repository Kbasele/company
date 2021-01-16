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
  const [isLogedIn, setIsLogedIn] = useState(false)  
  const [userObj, setUserObj] = useState({})
  const history = useHistory()
  const token = localStorage.getItem("USERTOKEN")

  useEffect(()=>{
    console.log(token)
     if(!isLogedIn) history.push()
  })


  return (
    <StyledContainer isLogedIn={isLogedIn}>
      <UserContext.Provider value={{isLogedIn, setIsLogedIn, userObj, setUserObj}}>
      {isLogedIn && <SideBar/>}
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
