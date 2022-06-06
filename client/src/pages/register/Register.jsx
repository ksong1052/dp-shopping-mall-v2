import { useState } from 'react';
import './register.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { registerUser } from '../../redux/user/user.action';
import { USER_SERVER } from '../../config';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const usernameHandler =(e) => {
    setUsername(e.currentTarget.value);    
  }

  const emaiHandler =(e) => {
    setEmail(e.currentTarget.value);    
  }

  const passwordHandler =(e) => {
    setPassword(e.currentTarget.value);    
  }

  const onSubmitRegister = (e) => {
    e.preventDefault();

    let dataToSubmit = {
      username: Username,
      email: Email,
      password: Password
    }

    // console.log(dataToSubmit);

    axios.post(`${USER_SERVER}/register`, dataToSubmit)
      .then(response => {
        if(response.data.registerSuccess) {
          registerUser(dispatch, response.data);
          navigate('/login');
        } else {
          alert("Failed to sign up.");
        }
      })
  }

  return (
    <div className="register">
      <div className="container">
        <Form className="registerForm" onSubmit={onSubmitRegister}>
          <div className="registerTitle">
            <h2>Sign Up</h2>
          </div>

          <Form.Group className="mb-3 rField" controlId="formBasicUsername">
            <Form.Label className="rLabel">Username</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter username" 
              value={Username}
              onChange={usernameHandler}  
            />            
          </Form.Group>          

          <Form.Group className="mb-3 rField" controlId="formBasicEmail">
            <Form.Label className="rLabel">Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={Email}
              onChange={emaiHandler}    
            />            
          </Form.Group>

          <Form.Group className="mb-3 rField" controlId="formBasicPassword">
            <Form.Label className="rLabel">Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Enter Password" 
              value={Password}
              onChange={passwordHandler}  
            />
          </Form.Group>

          <div className="rButton">
            <Button variant="primary" type="submit">
              Register
            </Button>
          </div>
          <div style={{ float: 'left' }}>
            Or <Link to="/login" className="link">Sign In Now!</Link>  
          </div>
        </Form> 
      </div>      
    </div>
  )
}

export default Register
