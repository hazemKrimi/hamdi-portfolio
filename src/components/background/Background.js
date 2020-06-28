import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Background.scss';

const Background = ({ children }) => {
    const blackSpring = useSpring({
        from: {
            transform: "translateX(200%)",
            opacity: 0
        },
        to: {
            transform: "translateX(0%)",
            opacity: 1
        },
        config: {
            velocity: 10
        }
    });

    return ( 
        <animated.div id="background" style={blackSpring}>
            {children}
        </animated.div>
    );
}
 
export default Background;