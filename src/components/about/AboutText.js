import React, { useContext } from 'react';
import { MainContext } from '../../contexts/MainContext';
import { useTransition, animated } from 'react-spring';
import './AboutText.scss';

const AboutText = () => {
    const { current, previous } = useContext(MainContext);
    const aboutText = current === "about";

    const transition = useTransition(aboutText, null, {
        from: { transform: previous === "welcome" ? "translateX(300%) translateY(0%)" : "translateX(0%) translateY(-200%)", opacity: 0 },
        enter: { transform: "translateX(0%) translateY(0%)", opacity: 1 },
        leave: { transform: current === "welcome" ? "translateX(300%) translateY(0%)" : "translateX(0%) translateY(-200%)", opacity: 0 }
    });

    return ( 
        <>
            {
                transition.map(({ item, key, props }) => (
                    item &&
                    <animated.p id="about-text" key={key} style={props}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et.
                    </animated.p>
                ))
            }
        </>
    );
}
 
export default AboutText;