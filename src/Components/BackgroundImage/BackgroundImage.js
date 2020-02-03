import React from "react";
import bgImage from '../../assets/bgimage.gif'
import Main from '../Main/Main';
import './bg.scss'
const BackgroundImage = () => {
  return (
    <div
className='background-image'
style={{backgroundImage:`url(${bgImage})`}}
 >
    <Main/>
    </div>
  );
};

export default BackgroundImage;
