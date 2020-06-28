import React, { useContext } from 'react';
import Logo from '../logo/Logo';
import { useTransition, animated } from 'react-spring';
import './Welcome.scss';
import { MainContext } from '../../contexts/MainContext';

const Welcome = () => {
    const { current } = useContext(MainContext);
    const welcome = current === 'welcome';

    const transition = useTransition(welcome, null, {
        initial: {
            transform: "translateX(-300%) translateY(0%)",
            opacity: 1
        },
        from: { transform: "translateX(0%) translateY(-300%)", opacity: 0 },
        enter: { transform: "translateX(0%) translateY(0%)", opacity: 1 },
        leave: { transform: "translateX(0%) translateY(-300%)", opacity: 1 }
    });

    return (
        <>
            <Logo />
            {
                transition.map(({ item, key, props }) => 
                    item &&
                    <animated.div key={key} id="welcome" style={props}>
                        <div className="container">
                            <h3>Welcome</h3>
                            <div id="description">
                                <h4>My name is</h4>
                                <h1>HAMDI <span>HALLEB</span></h1>
                                <h3>Graphic Designer-Photographer-Developer</h3>
                            </div>
                        </div>
                    </animated.div>
                )
            } 
        </>
    );
}

export default Welcome;