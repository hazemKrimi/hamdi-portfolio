import React, { useContext } from 'react';
import './About.scss';
import { useTransition, animated } from 'react-spring';
import { MainContext } from '../../contexts/MainContext';

const About = () => {
    const { current, previous } = useContext(MainContext);
    const about = current === "about";

    const transition = useTransition(about, null, {
        from: { transform: previous === "welcome" ? "translateX(-300%) translateY(0%)" : "translateX(0%) translateY(-300%)", opacity: 0 },
        enter: { transform: "translateX(0%) translateY(0%)", opacity: 1 },
        leave: { transform: current === "welcome" ? "translateX(-300%) translateY(0%)" : "translateX(0%) translateY(-300%)", opacity: 0 }
    });

    return (
        <>
            {
                transition.map(({ item, key, props }) => 
                    item && 
                    <animated.div key={key} id="about" style={props}>
                        <div className="container">
                            <h1>
                                ABOUT MYSELF
                                <span></span>
                            </h1>
                        </div>
                    </animated.div>
                )
            }
        </>
    );
}

export default About;