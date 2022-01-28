import React from 'react';
import './Repeat.css'
const Repeat = (props) => {

    return (
        <div>
            <div className="abouthead text-center ">
                <h2>{props.title}</h2>
                {(props.subHeading)?(
                    <span>{props.subHeading}</span>
                ):<div></div>}

                <div className="separetor text-center">
                    <div className="separetor-line"></div>
                    <div className="separetor-bold"></div>
                </div>
            </div>
        </div>
    );
};

export default Repeat;