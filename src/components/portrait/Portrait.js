import React, { useContext } from 'react';
import { useTransition, animated } from 'react-spring';
import { MainContext } from '../../contexts/MainContext';
import './Portrait.scss'

const Portrait = () => {
    const { current } = useContext(MainContext);
    const welcome = current === "welcome";

    const transition = useTransition(welcome, null, {
        initial: null,
        from: { transform: "translateY(-200%)", opacity: 0 },
        enter: { transform: "translateY(0%)", opacity: 1 },
        leave: { transform: "translateY(-200%)", opacity: 0 }
    });

    return (
        <>
            {
                transition.map(({ item, key, props }) => (
                    item &&
                    <animated.svg id="portrait" key={key} width="30rem" height="30rem" viewBox="0 0 660 720.128" style={props}>
                        <defs>
                            <style>
                                {
                                    ".cls-1{fill:#d8b269}.cls-2{fill:#bf9563}.cls-3,.cls-4,.cls-6,.cls-8{fill:none}.cls-3,.cls-4{stroke:#bf9563;stroke-width:4px;stroke-miterlimit:10}.cls-4{stroke:#050a0d;stroke-width:9px}.cls-5{fill:#050a0d}.cls-6{stroke:#d8b269;stroke-width:5px}.cls-7{stroke:none}"
                                }
                            </style>
                        </defs>
                        <g
                            transform="translate(-1110 -210)"
                        >
                            <g transform="translate(1148.151 220.998)">
                                <g>
                                    <g>
                                        <path
                                            className="cls-1"
                                            d="M248.5 383.209l-102.545-26.342-46.1-140.178 1.581-8.919-55.449-25.89L14 190.347v70.559l49.862 34.809 19.757 3.763 23.52 87.493-12.23 62.092 207.915 99.724 31.986-21.637 13.171-83.73 4.5-51.329-14.6 7.112z"
                                            transform="translate(12.342 160.342)"
                                        />
                                        <path
                                            className="cls-1"
                                            d="M96.758 336.558l58.329 21.642-23.52 11.289 64.915 15.993 47.04-48.921 65.385-25.4 12.7 17.4 12.23-16.464 43.032 51.838 2.822-83.824-14.112-33.868 7.526-57.369-40.454-52.684-17.874-51.745-96.431-31.065L57 126.78 91.809 171 57 239.657l7.15 77.843L57 239.657z"
                                            transform="translate(50.25 47.059)"
                                        />
                                        <path
                                            className="cls-1"
                                            d="M166.14 234.511l50.8-24.461 14.112 5.645 12.23-5.645 27.283 24.461-39.513 7.526z"
                                            transform="translate(146.466 185.176)"
                                        />
                                        <path
                                            className="cls-2"
                                            d="M166.14 234.591l50.539-13.171 14.827 4.553 11.76-6.19 27.3 14.808-27.3-24.461-12.23 5.889-13.7-5.889z" transform="translate(146.466 185.247)"
                                        />
                                        <path
                                            className="cls-3"
                                            d="M197.4 245.165l23.427-38.886-42.711-68.847L198.889 115l42.986 11.722"
                                            transform="translate(172.405 96.382)"
                                        />
                                        <path
                                            className="cls-4"
                                            d="M206.418 241.288l21.638-35.75-43.276-69.618 21.638-23.52 58.329 16.934"
                                            transform="translate(157.899 97.09)"
                                        />
                                        <path
                                            className="cls-5"
                                            d="M20.7 353.737L0 220.145 47.04 86.553l86.553-72.441L249.309 0l148.645 69.618-14.582 95.961-12.7-38.572-106.31-35.75-174.046 85.612 40.454 47.98-31.987 64.444 6.586 64.444-48.922-15.993z"
                                        />
                                        <path
                                            className="cls-4"
                                            d="M134.928 135.364l56.9-18.974 58.329 23.5"
                                            transform="translate(82.951 86.331)"
                                        />
                                        <path
                                            className="cls-3"
                                            d="M129.531 129.089L184.2 110.7l56.568 22.851"
                                            transform="translate(90.144 98.35)"
                                        />
                                        <path
                                            className="cls-5"
                                            d="M56.142 194.062L60 200.279l83.976-61.625 26.26 61.625 91.735-14.5 8.4-48.674 14.706-4.714-3.935-7.012h28.943l-3.062 7.012 34.9 53.388 66.166 22.972v-81.36l-56.447-8-41.558 5.984h-28.94l-14.272 4.025-16.106-10.01-104.69 4.056-4.228 8.941z"
                                            transform="translate(52.895 105.252)"
                                        />
                                        <path
                                            className="cls-2"
                                            d="M76.113 250.562l29.616 90 205.581 45.963-1.994 22.711-36.992-2.822L99.218 371.3 59.63 200.38z"
                                            transform="translate(52.569 176.651)"
                                        />
                                        <path
                                            className="cls-2"
                                            d="M76.738 209.637L42.249 189.88l-22.579 9.878v44.067l11.91 8.618-3.763-42.806 15.053-7.207 38.892 21.318z"
                                            transform="translate(17.341 167.395)"
                                        />
                                    </g>
                                </g>
                            </g>
                            <g
                                className="cls-6"
                            >
                                <path
                                    className="cls-7"
                                    d="M0 0h600v600H0z"
                                    transform="translate(1110 210)"
                                />
                                <path
                                    className="cls-8"
                                    d="M2.5 2.5h595v595H2.5z"
                                    transform="translate(1110 210)"
                                />
                            </g>
                            <g
                                className="cls-6"
                            >
                                <path
                                    className="cls-7"
                                    d="M0 0h600v600H0z"
                                    transform="translate(1170 276)"
                                />
                                <path
                                    className="cls-8"
                                    d="M2.5 2.5h595v595H2.5z"
                                    transform="translate(1170 276)"
                                />
                            </g>
                        </g>
                    </animated.svg>
                ))
            }
        </>
    );
}

export default Portrait;