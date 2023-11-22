import React from 'react';
import Paysage from '../../assets/paysage.png';


function Image() {
  return (  
    <div className="paysage-container ">
        <img src={Paysage} alt='Logo' className="paysage-image"/>
        <div className='image-overlay'><p>Chez vous, partout et ailleurs</p></div>
    </div>
    )
}

export default Image