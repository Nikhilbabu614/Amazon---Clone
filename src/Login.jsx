import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import {auth} from './firebase';

function Login() {


    const history = useHistory();
    const [email,setemail] = useState("");
    const [pass,setpass] = useState("")

    const login = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email,pass)
        .then((auth)=>{
            history.push('/')
        })
        .catch(e=> alert(e.message));
        
    }

    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,pass)
        .then((auth)=>{
            history.push('/')
        })
        .catch(e=> alert(e.message));
        
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://i2.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png?resize=768%2C219&ssl=1" alt="" />
            </Link>

            <div className="login_form">
                <h1>Sign in</h1>
                <form  className="form" action="">
                    <p>Email</p>
                    <input type="text"  onChange={(event)=>setemail(event.target.value)} value={email}/>
                    <p>password</p>
                    <input type="password" onChange={(event)=>setpass(event.target.value)} value={pass} />
                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice</p>
                    <button  type="submit" onClick={login} className="signin">Sign-in</button>
                </form>

                <button  className="create" onClick={register}>Create acccount</button>
            </div>
        </div>
    )
}

export default Login
