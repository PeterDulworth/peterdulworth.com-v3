import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLinks = () => {
  return (
    <div className='SocialLinks'>
      <a
        className='SocialLinks__link'
        href='https://github.com/PeterDulworth'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        className='SocialLinks__link'
        href='https://www.linkedin.com/in/peter-dulworth/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        className='SocialLinks__link'
        href='http://www.peterdulworth.com/resume/'
        target='_blank'
        rel='noopener noreferrer'
        id='SocialLinks__resume'
      >
        <FontAwesomeIcon icon={faFile} />
      </a>
    </div>
  );
};

export default SocialLinks;
