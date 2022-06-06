import React from 'react';
import { Link } from 'react-router-dom';

const LeftBar = () => {
  return (
    <div className="leftBarList">
      <div>
        <Link to="/" className="link">Home</Link>
      </div>
    </div>
  )
}

export default LeftBar  