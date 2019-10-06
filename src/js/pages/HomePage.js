import React from 'react';
import Card from '../components/Card';
import Grid from '../components/Grid';
import RiceSvg from '../../imgs/rice.svg';
import DogStickers from '../../imgs/dogstickers.png';
import IndeedSvg from '../../imgs/indeed.svg';
import MoodsicImg from '../../imgs/moodsic.png';
import StocksImg from '../../imgs/companyinsights.png';
import PrettyPicturesImg from '../../imgs/prettypictures.png';
import SketchesImg from '../../imgs/sketches.png';
import OtherImg from '../../imgs/other.png';

const HomePage = () => {
  return (
    <div className='HomePage'>
      <Grid>
        <Card
          title='Rice University'
          subtitle='b.s. computer science - c/o 2020'
          logo={RiceSvg}
          color={'#00205B'}
          href='/rice'
          isSvg
          scale={0.8}
        />
        <Card
          title='Indeed.com'
          subtitle='swe intern - summer 2019'
          logo={IndeedSvg}
          href='/indeed'
          color={'#2164f3'}
          isSvg
          scale={0.3}
        />
        <Card
          title='Doggo Stickers'
          subtitle='imessages sticker pack - 2018'
          logo={DogStickers}
          href='https://github.com/PeterDulworth/Doggo-Stickers'
        />
        <Card
          title='Company Insights'
          subtitle='stock market web scraper - 2019'
          logo={StocksImg}
          href='https://github.com/PeterDulworth/company-insights-webapp'
        />
        <Card
          title='Moodsic'
          subtitle='tamu hacks - 2018'
          logo={MoodsicImg}
          href='https://github.com/SophiaJefferson/moodsic'
        />
        <Card
          title='Sketches'
          subtitle='p5js sketches - 2019'
          logo={SketchesImg}
          href='https://peterdulworth.github.io/sketches/index.html'
        />
        <Card
          title='Pretty Pictures'
          subtitle='genetic algorithm picture breeder - 2018'
          logo={PrettyPicturesImg}
          href='http://prettypictures.peterdulworth.com/'
        />
        <Card
          title='Other Work...'
          subtitle="older versions of this site and other things i've made"
          logo={OtherImg}
          href='http://splash.peterdulworth.com/'
        />
      </Grid>
    </div>
  );
};

export default HomePage;
