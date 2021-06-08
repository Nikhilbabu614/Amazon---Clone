import './App.css';
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {

  const [{user},dispatch] = useStateValue();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authuser)=>{
      if(authuser){
        dispatch({
          type:"SET_USER",
          user:authuser
        })
      }else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route path="/login">
              <Login/>
          </Route>
          <Route path="/">
            <Header />
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
