import React from 'react';
import './CircleSelector.css';

const CircleSelector = (props) => (

    < div className='CircleSelector' >

        {
            props.circles.map((circle, index) => (
                <button
                    className={circle == props.selectedCircleIndex ? 'selected' : ''}
                    key={circle}
                    onClick={() => props.handleCircleSelection(circle)}
                >SELECT CIRCLE {circle}</button>
            ))
        }
    </div >
);

export default CircleSelector;