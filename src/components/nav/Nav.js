import React, { useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import './Nav.scss';
import { MainContext } from '../../contexts/MainContext';

const Polygon = ({ location, current }) => (
    <svg id="nav-polygon" width="3rem" height="3rem" viewBox="0 0 90 78">
        <g fill="none">
            <path d="M67.5 0L90 39 67.5 78h-45L0 39 22.5 0z" />
            <text
                transform="translate(36 50)"
                fill="#d8b269"
                fontSize={35}
                fontFamily="Montserrat"
                fontWeight={300}
            >
                <tspan x={0} y={0} style={{ userSelect: "none" }}>
                    {location.findIndex(route => route === current) + 1}
                </tspan>
            </text>
            <path
                d="M23.655 2L2.31 39l21.346 37h42.69L87.69 39 66.345 2h-42.69M22.5 0h45L90 39 67.5 78h-45L0 39 22.5 0z"
                fill="#d8b269"
            />
        </g>
    </svg>
)

const Menu = ({ location, current }) => (
    <div id="nav-menu">
        {
            location.map(route => (
                <svg key={route} width="1rem" height="1rem" viewBox="0 0 18.975 1.617">
                    <path fill={route === current ? "#d8b269" : "#b8bcbe"} d="M0 0h18.975v1.617H0z" />
                </svg>
            ))
        }
    </div>
)

const UpArrow = ({ location, current, previousLocation }) => (
    <svg width="1.5rem" height="1.5rem" viewBox="0 0 47.414 25.414" onClick={() => previousLocation()}>
        <defs>
            <clipPath id="clip-path">
                <path fill="none" d="M0 0h25.414v47.414H0z" />
            </clipPath>
            <style>
                {`.nav-arrow-up{fill:none;stroke:${location.findIndex(route => route === current) > 0 ? "#d8b269" : "#b8bcbe"};stroke-width:4px}`}
            </style>
        </defs>
        <g
            transform="rotate(-90 12.707 12.707)"
            clipPath="url(#clip-path)"
        >
            <path
                className="nav-arrow-up"
                transform="translate(.707 .707)"
                d="M0 0l23 25"
            />
            <path
                className="nav-arrow-up"
                transform="translate(1.707 23.707)"
                d="M0 23L21 0"
            />
        </g>
    </svg>
)

const DownArrow = ({ location, current, nextLocation }) => (
    <svg width="1.5rem" height="1.5rem" viewBox="0 0 47.414 25.414" onClick={() => nextLocation()}>
        <defs>
            <clipPath id="clip-path">
                <path fill="none" d="M0 0h25.414v47.414H0z" />
            </clipPath>
            <style>
                {`.nav-arrow-down{fill:none;stroke:${location.findIndex(route => route === current) < location.length - 1 ? "#d8b269" : "#b8bcbe"};stroke-width:4px}`}
            </style>
        </defs>
        <g
            transform="rotate(90 23.707 23.707)"
            clipPath="url(#clip-path)"
        >
            <path
                id="nav-arrow-down_svg__Line_2"
                className="nav-arrow-down"
                transform="translate(.707 .707)"
                d="M0 0l23 25"
            />
            <path
                id="nav-arrow-down_svg__Line_3"
                className="nav-arrow-down"
                transform="translate(1.707 23.707)"
                d="M0 23L21 0"
            />
        </g>
    </svg>
)

const Nav = () => {
    const { location, current, nextLocation, previousLocation } = useContext(MainContext);

    const spring = useSpring({
        from: {
            transform: "translateY(100%)"
        },
        to: {
            transform: "translateY(0%)"
        },
        duration: 5000,
        delay: 250
    });

    return (
        <animated.nav style={{ transform: spring.transform }}>
            <div id="nav-label">
                <Polygon current={current} location={location}/>
                <Menu current={current} location={location}/>
                <h2>{current}</h2>
            </div>
            <div id="nav-arrows">
                <UpArrow current={current} location={location} previousLocation={previousLocation}/>
                <DownArrow current={current} location={location} nextLocation={nextLocation}/>
            </div>
        </animated.nav>
    );
}

export default Nav;