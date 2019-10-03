import React from 'react';
// import RiceLogo from '../imgs/rice.png';
import BlackholeImg from '../../imgs/blackhole.png';
import PrettyPictures from '../../imgs/prettypictures.png';
import PeterDulworth from '../../imgs/peterdulworth.png';
import Card from './Card';

const Content = () => {
    return (
        <div className='Content'>
            <Card title='skills' logo={PrettyPictures} href='http://prettypictures.peterdulworth.com/' />
            <Card title='sketches' logo={BlackholeImg} href='https://peterdulworth.github.io/sketches/projects.html' />
            <Card title='portfolio' logo={PeterDulworth} href='http://peterdulworth.com' />
            <Card title='education' logo={BlackholeImg} href='https://peterdulworth.github.io/sketches/projects.html' />
            <Card title='skills' logo={BlackholeImg} href='https://peterdulworth.github.io/sketches/projects.html' />
            <Card title='resume' logo={BlackholeImg} href='https://peterdulworth.github.io/sketches/projects.html' />
            <Card title='contact' logo={BlackholeImg} href='https://peterdulworth.github.io/sketches/projects.html' />
        </div>
    );
};

export default Content;
