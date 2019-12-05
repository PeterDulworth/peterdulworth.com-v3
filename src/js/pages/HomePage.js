import React from 'react';
import Card from '../components/Card';
import Grid from '../components/Grid';
import RiceSvg from '../../imgs/work/rice.svg';
import DogStickers from '../../imgs/work/dogstickers.png';
import IndeedSvg from '../../imgs/work/indeed.svg';
import CompanyInsightsImg from '../../imgs/work/companyinsights.png';
import PrettyPicturesImg from '../../imgs/work/prettypictures.png';
import RiceBookImg from '../../imgs/work/ricebook.png';
import SketchesSvg from '../../imgs/work/sketches.svg';
import OtherSvg from '../../imgs/work/other.svg';

// TODO add beet-cl or phylovis?

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
          logo={CompanyInsightsImg}
          href='https://github.com/PeterDulworth/company-insights-webapp'
        />
        {/*<Card*/}
        {/*  title='Moodsic'*/}
        {/*  subtitle='tamu hacks - 2018'*/}
        {/*  logo={MoodsicImg}*/}
        {/*  href='https://github.com/SophiaJefferson/moodsic'*/}
        {/*/>*/}
        <Card
          title='Rice Book'
          subtitle='social network - 2019'
          logo={RiceBookImg}
          href='http://thericebook.surge.sh'
        />
        <Card
          title='Pretty Pictures'
          subtitle='genetic algorithm picture breeder - 2018'
          logo={PrettyPicturesImg}
          href='http://prettypictures.peterdulworth.com/'
        />
        <Card
          title='Sketches'
          subtitle='p5js sketches - 2019'
          logo={SketchesSvg}
          href='https://peterdulworth.github.io/sketches/index.html'
          color={'#0ba1a4'}
          isSvg
          scale={0.2}
        />
        <Card
          title='Other Work...'
          subtitle="older versions of this site and other things i've made"
          logo={OtherSvg}
          href='http://splash.peterdulworth.com/'
          color={'rgb(111, 207, 242)'}
          isSvg
          scale={0.2}
        />
      </Grid>
    </div>
  );
};

export default HomePage;
