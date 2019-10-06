import React from 'react';
import Grid from '../components/Grid';
import FranzImg from '../../imgs/gallery/franz.png';
import JosieBallImg from '../../imgs/gallery/josie_ball.jpg';
import JosieBasketImg from '../../imgs/gallery/josie_basket.jpg';
import JosieBoxImg from '../../imgs/gallery/josie_box.jpg';
import Card from '../components/Card';

const GalleryPage = () => {
  return (
    <div className='GalleryPage'>
      <h1>Gallery</h1>
      <Grid>
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
      </Grid>
    </div>
  );
};

export default GalleryPage;
