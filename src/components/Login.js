import React, {useState} from 'react';

import { Avatar, makeStyles } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
  import VpnKeyIcon from '@material-ui/icons/VpnKey';
  import isEmail from 'validator/lib/isEmail';

  import "../css/Login.css";

  const Login = ({setScreen}) => {

    const useStyles = makeStyles((theme) => ({
        sizeAvatar: {
          height: theme.spacing(10),
          width: theme.spacing(10),
        },
      }));

      const classes = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = () => {

        if(isEmail(email)){
            if(localStorage.getItem(email)){
                const parsedData = JSON.parse(localStorage.getItem(email));
                if(password.length > 0 && password === parsedData.password){
                    alert(`Welcome ${parsedData.name} to our app`);
                    setEmail("");
                    setPassword("");    
                }else{
                    alert("Password incorrect, plz check it");
                }
            }else{
                alert("You are not registered with our app, make registration first");
            }
        }else{
            alert("Enter a correct email plz");
        }

        
    }

      return (
          <div className="login">
          <Avatar className={classes.sizeAvatar} src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" /> 
          <div className="input__useremail">
          <AccountCircleIcon style={{fill: "#fff"}} />
          <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" />
      </div>
      <div className="input__userpassword">
          <VpnKeyIcon style={{fill: "#fff"}} />
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
      </div>
      <div className="button__containers">
                <button onClick={loginUser}>Login</button>
                <p onClick={() => setScreen("register")}>Register</p>
            </div>
          </div>
      );
  }
  
  export default Login;
  