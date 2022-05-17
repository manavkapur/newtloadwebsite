
import React, { useEffect,createContext,useReducer,useContext} from 'react'
import {BrowserRouter,  Switch, Route, useHistory } from 'react-router-dom'



// // COmponents
import Header from './components/Header';
import Home from './components/Home/home';
import Signup from './components/auth/signup'
import Signu from './components/auth/signu'
import Graph from './components/graph/UserHome'

import Profile  from './components/profile/profile'

import Order from './components/order/order';
import Admin from './components/admin/UserHome';

import UserHome from './components/UserHome/UserHome';

import {reducer, initialState} from './reducers/userReducer'
import SubmitOrder from './components/SubmitOrder/CreateOrder'

// // xport 
export const UserContext =  createContext()


const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
    }
    
  },[])
  // 
  return(
    <Switch>
      <Route exact path="/" >
      <Home />
      </Route>
      <Route path="/odgraph/:graphId" >
      <Graph/>
      </Route>
      <Route path="/signup">
      <Signup />
      </Route>
      <Route path="/signin">
      <Signu />
      </Route>
      <Route path="/profile/:id">
        <Profile />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>

      <Route path="/order">
        <Order/>
      </Route>
      <Route path="/admin">
        <Admin/>
      </Route>
      <Route path="/createGraph/:id">
        <SubmitOrder/>
      </Route>
      <Route path="/home">
      {state ? <UserHome/> : <Signup/>}
      </Route>
     
    
      
    </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <Header />
      <Routing />
      
    </BrowserRouter>
    </UserContext.Provider>
  );
}


export default App;
