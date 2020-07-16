import React,{useEffect,unsubscribe} from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login"
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";


function App() {

  const [{user},dispatch]=useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
      dispatch({
        type:"SET_USER",
        user:authUser
        });
      }
      else{
        dispatch({
          type:"SET_USER",
          user:null
        });
      }
    });
return () =>{
  unsubscribe();
}

  }, []);
console.log("User is :",user);
  return (
  <Router>
   <div className="App">
     <Switch>
       <Route path="/checkout">
       <Header/>
         <Checkout/>
       </Route>
       <Route path="/login">
         <Login />
       </Route>
       <Route path="/">
       <Header/>
         <Home/>
       </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
