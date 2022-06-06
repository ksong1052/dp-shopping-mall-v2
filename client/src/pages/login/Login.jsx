import { useState } from 'react';
import './login.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { loginUser } from '../../redux/user/user.action';
import { USER_SERVER } from '../../config';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const emaiHandler =(e) => {
    setEmail(e.currentTarget.value);    
  }

  const passwordHandler =(e) => {
    setPassword(e.currentTarget.value);    
  }

  const onSubmitLogin = (e) => {
    e.preventDefault();

    let dataToSubmit = {
      email: Email,
      password: Password
    }

    axios.post(`${USER_SERVER}/login`, dataToSubmit)
      .then(response => {
        if(response.data.loginSuccess) {
          dispatch(loginUser(response.data));          
          navigate('/');
        } else {
          alert("Failed to sign in.");
        }
      })
  }

  return (
    <div className="login">
      <div className="container">
        <Form className="loginForm" onSubmit={onSubmitLogin}>
          <div className="loginTitle">
            <h2>Sign In</h2>
          </div>          

          <Form.Group className="mb-3 lField" controlId="formBasicEmail">
            <Form.Label className="lLabel">Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={Email}
              onChange={emaiHandler}
            />            
          </Form.Group>

          <Form.Group className="mb-3 lField" controlId="formBasicPassword">
            <Form.Label className="lLabel">Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Enter Password" 
              value={Password}
              onChange={passwordHandler}
            />
          </Form.Group>          

          <div className="lButton">            
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
          <div style={{ float: 'left' }}>
            Or <Link to="/register" className="link">Sign Up Now!</Link> 
          </div>
        </Form> 
      </div>      
    </div>
  )
}

export default Login
