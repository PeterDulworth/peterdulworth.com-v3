import React, { useContext } from 'react';
import CenterAlignedTable from '../components/CenterAlignedTable';
import SocialLinks from '../components/SocialLinks';
import { ThemeContext } from '../contexts/themeContext.js';
import RainbowText from '../components/RaindbowText';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../sketches/sketch';
import Card from '../components/Card';
import RiceImg from '../../imgs/rice.png';
import DogStickers from '../../imgs/dogstickers.png';
import IndeedImg from '../../imgs/indeed.png';
import MoodsicImg from '../../imgs/moodsic.png';
import StocksImg from '../../imgs/companyinsights.png';
import SketchesImg from '../../imgs/sketches.png';
import OtherImg from '../../imgs/other2.png';
import Content from '../components/Content';

const LandingPage = () => {
  const theme = useContext(ThemeContext);
  const subtitleThemeClass = theme.getThemeClass('LandingPage__subtitle');
  const titleThemeClass = theme.getThemeClass('LandingPage__title');

  // TODO add wavy underline
  return (
    <div>
      <div className='LandingPage'>
        <P5Wrapper sketch={sketch} className='test123' background={theme.isDarkMode ? 22 : 255} />
        <div>
          <RainbowText text='Peter Dulworth' className={`LandingPage__title ${titleThemeClass}`} />
          <div className={`LandingPage__subtitle ${subtitleThemeClass}`}>
            <CenterAlignedTable
              items={[
                {
                  left: 'SWE intern',
                  right: <span className='LandingPage__indeed'>indeed.com</span>,
                },
                {
                  left: 'CS',
                  right: 'rice university',
                },
              ]}
            />
            <br />
            <SocialLinks />
          </div>
        </div>
      </div>
      <Content>
        <Card title='Rice University' subtitle='b.s. computer science - 2020' logo={RiceImg} href='/rice' />
        <Card
          title='Doggo Stickers'
          subtitle='imessages sticker pack - 2018'
          logo={DogStickers}
          href='https://github.com/PeterDulworth/Doggo-Stickers'
        />
        <Card title='Indeed.com' subtitle='swe intern - 2019' logo={IndeedImg} href='/indeed' />
        <Card
          title='Moodsic'
          subtitle='tamu hacks - 2018'
          logo={MoodsicImg}
          href='https://github.com/SophiaJefferson/moodsic'
        />
        <Card
          title='Company Insights'
          subtitle='react, python - 2019'
          logo={StocksImg}
          href='https://github.com/PeterDulworth/company-insights-webapp'
        />
        <Card
          title='Sketches'
          subtitle='p5js sketches - 2019'
          logo={SketchesImg}
          href='https://peterdulworth.github.io/sketches/index.html'
        />
        <Card title='Other Work...' subtitle='' logo={OtherImg} href='http://splash.peterdulworth.com/' />
      </Content>
    </div>
  );
};

export default LandingPage;
