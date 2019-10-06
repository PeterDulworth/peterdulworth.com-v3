import React from 'react';
import Nav from '../components/Nav';
import Content from '../components/Content';
import BlackholeImg from '../../imgs/blackhole.png';
import FranzImg from '../../imgs/franz.png';
import JosieBallImg from '../../imgs/josie_ball.jpg';
import JosieBasketImg from '../../imgs/josie_basket.jpg';
import JosieBoxImg from '../../imgs/josie_box.jpg';
import Card from '../components/Card';

const GalleryPage = () => {
  return (
    <div className='GalleryPage'>
      <Nav />
      <h1>Gallery</h1>
      <Content>
        <Card
          title='sketches'
          subtitle='asdf'
          logo={BlackholeImg}
          href='https://peterdulworth.github.io/sketches/projects.html'
        />
        <Card
          title='franz'
          subtitle='asdf'
          logo={FranzImg}
          href='https://peterdulworth.github.io/sketches/projects.html'
        />
        <Card
          title='josie'
          subtitle='asdf'
          logo={JosieBallImg}
          href='https://peterdulworth.github.io/sketches/projects.html'
        />
        <Card
          title='josie'
          subtitle='asdf'
          logo={JosieBasketImg}
          href='https://peterdulworth.github.io/sketches/projects.html'
        />
        <Card
          title='josie'
          subtitle='asdf'
          logo={JosieBoxImg}
          href='https://peterdulworth.github.io/sketches/projects.html'
        />
      </Content>
    </div>
  );
};

export default GalleryPage;
