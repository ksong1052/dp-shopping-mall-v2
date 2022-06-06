import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { logoutUser } from '../../../redux/user/user.action';
import { USER_SERVER } from '../../../config';
import { useSelector } from "react-redux";

const RightBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const onClickLogout = (e) => {
    e.preventDefault();

    axios.get(`${USER_SERVER}/logout`)
      .then(response => {
        if(response.data.logoutSuccess) {
          logoutUser(dispatch, response.data);
          navigate('/login');          
        } else {
          alert('Failed to logout');
        }
      })
  }

  if (user.userData && !user.userData.token) {
    return (
      <div className="rightBarList"> 
        <div>
          <Link to="/login" className="link">Sign In</Link>
        </div>
        <div>
          <Link to="/register" className="link">Sign Up</Link>
        </div>
      </div>
    )
  } else {
    return (
      <div className="rightBarList">  
        <div className="rButton">
          <Button variant="primary" onClick={onClickLogout}>
            Logout
          </Button>
        </div>
      </div>
    )
  }
}

export default RightBar
