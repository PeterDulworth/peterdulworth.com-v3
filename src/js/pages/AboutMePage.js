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
          <h1 className='AboutMePage__name'>About Me</h1>
          <span className='AboutMePage__contact'>&gt; peterdulworth@alumni.rice.edu // San Francisco, CA</span>
          <p>
            Grew up in Houston, TX. Studied Math + CS at Rice University. Living in San Francisco. Working at Indeed.
          </p>
          <p>
            Interested in full stack, user experience, robotics, and interpreters.
          </p>
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
