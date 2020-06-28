import React, { useState, useContext } from 'react';
import { useSpring, useTransition, animated } from 'react-spring';
import { MainContext } from '../../contexts/MainContext';
import './Skills.scss';

const Stat = () => {
    const spring = useSpring({
        from: { left: "5%", width: "100%" },
        to: { left: "100%", width: "0%" },
        delay: 700
    });

    return (
        <div id="stat">
            <svg width="400px" height="40px" viewBox="0 0 657 30" style={{ position: "relative", zIndex: 2 }}>
                <g clipPath="url(#clip)">
                    <path
                        d="M630.75 30l-5.25-9h-98l-5.25 9h-17.5l-5.25-9h-96l-5.25 9h-17.5l-5.25-9h-96l-5.25 9h-17.5l-5.25-9h-96l-5.25 9h-17.5l-5.25-9h-96l-5.25 9H8.75L0 15 8.75 0h17.5l4.667 8h97.167l4.667-8h17.5l4.667 8h97.167l4.667-8h17.5l4.667 8h97.167l4.667-8h17.5l4.667 8h97.167l4.667-8h17.5l4.667 8h99.167l4.667-8h17.5l8.75 15-8.75 15z"
                        fill="#d8b269"
                    />
                </g>
            </svg>
            <animated.div
                style={{
                    position: "relative",
                    transform: "translateY(-108%)",
                    left: spring.left,
                    width: spring.width,
                    height: "40px",
                    backgroundColor: "#050a0d",
                    zIndex: 3
                }}
            ></animated.div>
        </div>
    );
}

const Skills = () => {
    const { current, previous } = useContext(MainContext);
    const skill = current === "skills";

    const mainTransition = useTransition(skill, null, {
        from: { transform: previous === "about" ? "translateX(300%) translateY(0%)" : "translateX(0%) translateY(-200%)", opacity: 0 },
        enter: { transform: "translateX(0%) translateY(0%)", opacity: 1 },
        leave: { transform: current === "about" ? "translateX(300%) translateY(0%)" : "translateX(0%) translateY(-200%)", opacity: 0 }
    });

    const [skills] = useState([
        {
            id: 1,
            name: "Graphic Design",
            tools: [
                { name: "Adobe Xd", id: 1 },
                { name: "Adobe Xd", id: 2 },
                { name: "Adobe Xd", id: 3 }
            ],
            show: true
        },
        {
            id: 2,
            name: "Photography",
            tools: [
                { name: "Adobe Xd", id: 1 },
                { name: "Adobe Xd", id: 2 },
                { name: "Adobe Xd", id: 3 }
            ],
            show: false
        },
        {
            id: 3,
            name: "Web and Mobile Development",
            tools: [
                { name: "Adobe Xd", id: 1 },
                { name: "Adobe Xd", id: 2 },
                { name: "Adobe Xd", id: 3 }
            ],
            show: false
        },
    ]);

    const skillTransition = useTransition(skills, skill => skill.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });

    return (
        <>
            {
                mainTransition.map(({ item, key, props }) =>
                    item &&
                    <animated.div id="skills" key={key} style={props}>
                        {skillTransition.map(({ item: { show, name, tools }, key, props }) => (
                            item && show &&
                            <animated.div style={props} key={key}>
                                <h2 style={{ display: "inline", color: "#f2f2f2", marginBottom: "20px" }}>
                                    {name} 
                                </h2>
                                <div id="skill-stats">
                                    {
                                        tools.map(({ name, id }) =>
                                            <div key={id}>
                                                <h4 style={{ color: "#f2f2f2", margin: "10px 0px" }}>
                                                    {name}
                                                </h4>
                                                <Stat />
                                            </div>
                                        )
                                    }
                                </div>
                            </animated.div>
                        ))}
                    </animated.div>
                )
            }
        </>
    );
}
 
export default Skills;
