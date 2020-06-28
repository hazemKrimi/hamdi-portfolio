import React, { useContext } from 'react';
import { useTransition, animated } from 'react-spring';
import { MainContext } from '../../contexts/MainContext';

const Logo = () => {
    const { current } = useContext(MainContext);
    const welcome = current === "welcome";

    const transition = useTransition(welcome, null, {
        initial: {
            top: "40%",
            left: "50%",
            width: "3rem",
            height: "3rem"
        },
        from: {
            top: "-100%",
            left: "11.5%",
            width: "3rem",
            height: "3rem",
            opacity: 0
        },
        enter: {
            top: "15%",
            left: "11.5%",
            width: "2.5rem",
            height: "2.5rem",
            opacity: 1
        },
        leave: {
            top: "-40%",
            left: "12%",
            width: "2.5rem",
            height: "2.5rem",
            opacity: 0
        }
    });

    return (
        <>
            {
                transition.map(({ item, key, props }) => (
                    item &&
                    <animated.svg key={key} width={props.width} height={props.height} viewBox="0 0 110.692 98.157" style={{ position: "absolute", ...props }}>
                        <path
                            d="M80.402 75.676l.116-29L80.705 0l27.1 46.693-27.1 46.7H26.512L26.904 0 0 46.668l79.873.025"
                            fill="none"
                            stroke="#050b0d"
                            strokeMiterlimit={10}
                            strokeWidth={2}
                            strokeDasharray={900}
                        />
                    </animated.svg>
                ))
            }
        </>
    );
}

export default Logo;