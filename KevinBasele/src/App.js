import {Switch, Route} from 'react-router-dom'
import SideBar from './components/SideBar';
import { UserContext } from './contexts/UserContext';
import CreatePage from './pages/CreateCostumerPage';
import CustomerDetailPage from './pages/CustomerDetailPage';
import CustomerUpdatePage from './pages/CustomerUpdatePage';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import {useState} from 'react'
import { StyledContainer } from './Style/StyledContainer';
import LandingPage from './pages/LandingPage';

function App() {
  const [ customerList, setCustomerList] = useState(null)
  const [auth, setAuth] = useState(Boolean)
  const [isUpToDate, setIsUpToDate] = useState(false)
  const [userObj, setUserObj] = useState({})
  const token = localStorage.getItem("USERTOKEN")


  return (
    <StyledContainer isLogedIn={token}>
      <UserContext.Provider value={{
        userObj, setUserObj, 
        customerList, setCustomerList, 
        auth, setAuth,
        isUpToDate, setIsUpToDate
        }}>
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
