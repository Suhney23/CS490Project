import './Njitlogo.png'
import LoginForm from "./LoginForm";
import React, {useState} from "react";
import './index.css';

export default function Login() {
    const  adminUser = {
        username: "admin",
        password: "admin123"
    }

    const [ user, setUser] = useState({username: "" })
    const [error, setError] = useState("")

    const Login = details => {
        /*}
        Need to change if conditions to response in database
        */
        if (details.username === adminUser.username && details.password === adminUser.password) {
            setUser({
              username: details.name,
            })
        }else{
            setError("Invalid Username or Password.")
        }

    }

    const Logout = () => {
        console.log("Logout");
        setUser({username: ""})

    }
    return (
        <div className= "Login">
            <img src={"Njitlogo.png"} key={"NjitLogo"}/>
            {(user.username !== "") ? (
                <div className={"welcome"}>
                    <h2>Welcome, <span>{user.username}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ):(
                <LoginForm Login={Login} error={error}/>

            )}
        </div>

    )}
