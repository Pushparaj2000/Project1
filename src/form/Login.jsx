import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './style.css';
function Login() {

    const navigate=useNavigate();
    

    // Register page .
    
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    
   // defining function
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        
        
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        

    }
    //alert the registration as successfully.

    const handleSubmit  = () => {
        window.alert("Logged In Successful....welcome back");
        navigate("/")

    }

    return(
        <div className="form">
            <div className="form-body">

                <h2>Login Page</h2>
                
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password" required/>
                </div>
                
            </div>
            <div class="footer">
                <Button varient="outline-dark" onClick={()=>handleSubmit()} type="submit" class="btn">Login</Button>
            </div>
        </div>
       
    )       
}

export default Login

