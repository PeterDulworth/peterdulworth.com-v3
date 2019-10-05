import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../contexts/themeContext';
import { Redirect } from 'react-router-dom';

const Card = ({ title, subtitle, logo, href }) => {
  const imgDiv = <img src={logo} loading='lazy' alt='logo' />;
  const theme = useContext(ThemeContext);
  const cardThemeClass = theme.getThemeClass('Card');
  const [content, setContent] = useState(imgDiv);
  const [redirect, setRedirect] = useState(null);

  const handleMouseEnter = () => {
    const descriptionDiv = (
      <div className='Card__description'>
        <div className='Card__title'>{title}</div>
        <div className='Card__subtitle'>{subtitle}</div>
      </div>
    );
    setContent(descriptionDiv);
  };

  const handleMouseLeave = () => {
    setContent(imgDiv);
  };

  const handleClick = () => {
    setRedirect(<Redirect to={href} />);
  };

  return (
    <a
      className={`Card ${cardThemeClass}`}
      href={href}
      target='_blank'
      rel='noreferrer noopener'
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
      {redirect}
    </a>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  logo: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired,
};

export default Card;
