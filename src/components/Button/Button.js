import React, {useState} from "react";
import './Button.css';

export const Button = ({text, url, theme, addClasses}) => {
    const classes = ['action', theme, addClasses].filter(name => !!name).join(' ');
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const onMouseEnter = (event) => {
        const elemCoordinates = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - elemCoordinates.left;
        const y = event.clientY - elemCoordinates.top;

        setX(x);
        setY(y);
    };

    return (
        <a className={classes}
           href={url || '/'}
           onMouseMove={onMouseEnter}
           onMouseOut={onMouseEnter}
        >
            <span className='effect-elem' style={{
                'top': y + 'px',
                'left': x + 'px'
            }}></span>
            <span className='action__label'>{text}</span>
        </a>
    )
}
