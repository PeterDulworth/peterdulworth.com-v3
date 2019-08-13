import React from 'react';
import RiceLogo from '../imgs/rice.png';
import BlackholeImg from '../imgs/blackhole.png';
import PrettyPictures from '../imgs/prettypictures.png';
import Card from './Card';

const Content = () => {
    console.log(RiceLogo);

    return (
        <div className="Content">
            <Card title="sketches" logo={BlackholeImg} href="https://peterdulworth.github.io/sketches/projects.html" />
            <Card title="skills" logo={PrettyPictures} href="http://prettypictures.peterdulworth.com/" />
            {/* <Card title="older versions of this site" logo={BlackholeImg} href="https://peterdulworth.github.io/sketches/projects.html" /> */}
            {/* <Card title="older versions of this site" logo={BlackholeImg} href="https://peterdulworth.github.io/sketches/projects.html" /> */}
        </div>
    );
};

export default Content;