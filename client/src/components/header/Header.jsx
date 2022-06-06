import React from 'react';
import './header.scss';
import RightBar from './sections/RightBar';
import LeftBar from './sections/LeftBar';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="leftBar">
          <LeftBar />
        </div>

        <div className="rightBar">
          <RightBar />
        </div>
      </div>
    </div>
  )
}

export default Header
