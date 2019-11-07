import React from 'react';
import Tilt from 'react-tilt'
import Brain from './brain.png'
import './Logo.css'

const Logo = () =>{
  return(
    <div className='ma4 mt8'>
      <Tilt className="Tilt r2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3">
          <img alt='Brain logo' src={Brain}/> 
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
