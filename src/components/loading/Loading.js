import React from 'react';
import { useSpring, animated, config } from 'react-spring';

const Loading = () => {
    const spring = useSpring({
        from: {
            x: 0
        },
        to: async next => {
            while (1) {
                await next({ x: 900 });
                await next({ x: 0 });
            }
        },
        config: config.slow,
        duration: 1000
    });
    return (
        <div style={{ height: "100vh" }}>
            <animated.svg width="3rem" height="3rem" viewBox="0 0 110.692 98.157" strokeDashoffset={spring.x} style={{ position: "relative", top: "40%", left: "50%" }}>
                <path
                    d="M80.402 75.676l.116-29L80.705 0l27.1 46.693-27.1 46.7H26.512L26.904 0 0 46.668l79.873.025"
                    fill="none"
                    stroke="#050b0d"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                    strokeDasharray={900}
                />
            </animated.svg>
        </div>
    );
}

export default Loading;