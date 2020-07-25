import React from 'react';
import './Circles.css';


const Circles = (props) => (
    <div className={'Circles'}>
        {props.circles.map((circle, index) => (
            <div
                className={circle === props.selectedCircleIndex ? 'selected' : ''}
                key={circle}
            >{circle}</div>
        ))}
    </div >
);

export default Circles;