import React, { useContext } from 'react';
import { useTransition, animated } from 'react-spring';
import './SkillsText.scss';
import { MainContext } from '../../contexts/MainContext';

const SkillsText = () => {
    const { current, previous } = useContext(MainContext);
    const skillsText = current === "skills";

    const transition = useTransition(skillsText, null, {
        from: { transform: previous === "about" ? "translateX(-300%) translateY(0%)" : "translateX(0%) translateY(-300%)", opacity: 0 },
        enter: { transform: "translateX(0%) translateY(0%)", opacity: 1 },
        leave: { transform: current === "about" ? "translateX(-300%) translateY(0%)" : "translateX(0%) translateY(-300%)", opacity: 0 }
    });

    return ( 
        <>
            {
                transition.map(({ item, key, props }) =>
                    item &&
                    <animated.div key={key} id="skills-text" style={props}>
                        <div className="container">
                            <h1>
                                WHAT
                                <span>CAN I DO</span>
                            </h1>
                        </div>
                    </animated.div>
                )
            }
        </>
    );
}
 
export default SkillsText;