import React from 'react';
import './footer.scss';
// import Image1 from '../../images/banner-bg.jpg';
import Image2 from '../../images/bottom.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerContent">footer</div>
        <div className="footerImg">
          {/* <img src={Image1} alt="" /> */}
          <img src={Image2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
