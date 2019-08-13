import React from 'react';
import PropTypes from 'prop-types';
import RiceLogo from '../imgs/rice.png';
import BlackholeImg from '../imgs/blackhole.png';
import PrettyPictures from '../imgs/prettypictures.png';
import Card from './Card';

const Content = (props) => {
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

Content.propTypes = {
    
};

export default Content;