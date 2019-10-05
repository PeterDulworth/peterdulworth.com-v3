import React, { useState } from 'react';
import './styles/_index.scss';
import Nav from './js/components/Nav';
import LandingPage from './js/pages/LandingPage';
import Content from './js/components/Content';
import Footer from './js/components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeContext } from './js/contexts/themeContext.js';
import Gallery from './js/pages/Gallery';
import Card from './js/components/Card';
import PrettyPictures from './imgs/prettypictures4.png';
import RiceImg from './imgs/rice.png';
import BlackholeImg from './imgs/blackhole.png';
import MoodsicImg from './imgs/moodsic.png';
import PeterDulworth from './imgs/peterdulworth.png';
import DogStickers from './imgs/dogstickers.png';
import StocksImg from './imgs/companyinsights.png';
import SketchesImg from './imgs/sketches.png';
import OtherImg from './imgs/other2.png';
import IndeedImg from './imgs/indeed.png';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  const getThemeClass = (baseClassName) => {
    return isDarkMode ? `${baseClassName}--dark` : `${baseClassName}--light`;
  };

  const themeClass = isDarkMode ? 'App--dark' : 'App--light';

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, getThemeClass }}>
      <Router>
        <div className={`App ${themeClass}`}>
          <Switch>
            <Route path='/gallery'>
              <Gallery />
            </Route>
            <Route path='/'>
              <Nav />
              <LandingPage />
              <Content>
                <Card
                  title='Rice University'
                  subtitle='b.s. computer science - 2020'
                  logo={RiceImg}
                  href='https://peterdulworth.github.io/sketches/projects.html'
                />
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
                  href='https://peterdulworth.github.io/sketches/projects.html'
                />
                <Card title='Other Work...' subtitle='' logo={OtherImg} href='http://splash.peterdulworth.com/' />
              </Content>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
