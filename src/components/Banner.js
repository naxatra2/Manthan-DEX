import React from 'react';
import bannerImage from './images/headerIng.png'; // Adjust the path accordingly
import './banner.css'
function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Project Banner" />
      {/* Add additional content or styles here */}
    </div>
  );
}

export default Banner;