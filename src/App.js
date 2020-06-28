import React, { lazy, Suspense } from 'react';
import Loading from './components/loading/Loading';
import './App.scss';

const Nav = lazy(() => import("./components/nav/Nav"));
const Welcome = lazy(() => import("./components/welcome/Welcome"));
const Background = lazy(() => import("./components/background/Background"));
const About = lazy(() => import("./components/about/About"));
const AboutText = lazy(() => import("./components/about/AboutText"));
const Portrait = lazy(() => import("./components/portrait/Portrait"));
const SkillsText = lazy(() => import("./components/skills/SkillsText"));
const Skills = lazy(() => import("./components/skills/Skills"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
        <Nav />
        <Background>
          <Portrait />
          <AboutText />
          <Skills />
        </Background>
        <Welcome />
        <About />
        <SkillsText />
    </Suspense>
  );
}

export default App;
