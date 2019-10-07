import React from 'react';
import JosieBallImg from '../../imgs/gallery/josie_ball.jpg';
import JosieBoxImg from '../../imgs/gallery/josie_box.jpg';
import BigBendImg from '../../imgs/gallery/big_bend.jpg';
import ColoradoImg from '../../imgs/gallery/colorado.jpg';
import FranzImg from '../../imgs/gallery/franz.png';
import VelowayImg from '../../imgs/gallery/veloway.jpg';
import MeImg from '../../imgs/me/headshot-xl-crop.jpg';

const AboutMePage = () => {
  return (
    <div className='AboutMePage'>
      <div className='AboutMePage__aboutMe'>
        <img src={MeImg} className='AboutMePage__headshot' alt='me' />
        <div className='AboutMePage__text'>
          <h1 className='AboutMePage__name'>Peter Dulworth</h1>
          <span className='AboutMePage__contact'>> psd2@rice.edu // 832.567.5653</span>
          <p>
            I'm a Senior at the Rice University studying Computer Science. I spent my 2019 summer in Austin TX at Indeed
            as a software development intern. I am now seeking full time software engineering opportunities in Austin
            and San Fransisco post graduation.
          </p>
          <p>
            I am interested in full stack development. I love building backend services and tying them together into
            beautiful and cohesive user interfaces.
          </p>
          <p>If you would like to reach me, email me at psd2@rice.edu.</p>
        </div>
      </div>
      <h3>gallery</h3>
      <br />
      <div className='AboutMePage__imageWrapper'>
        <img src={FranzImg} alt='' className='AboutMePage__image' />
        <img src={BigBendImg} alt='' className='AboutMePage__image' />
        <img src={JosieBallImg} alt='' className='AboutMePage__image' />
        <img src={VelowayImg} alt='' className='AboutMePage__image' />
        <img src={JosieBoxImg} alt='' className='AboutMePage__image' />
        <img src={ColoradoImg} alt='' className='AboutMePage__image' />
      </div>
    </div>
  );
};
export default AboutMePage;
