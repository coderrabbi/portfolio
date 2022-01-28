import React from 'react';
import './Shape.css'

const Shape = () => {
    return (
        <div className="shape-container">
           <div className="shape-parent">
               <img src={require('../../assets/images/download.png').default} alt="" />
           </div>
        </div>
    );
};

export default Shape;