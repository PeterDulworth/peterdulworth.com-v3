import React from 'react';
import PropTypes from 'prop-types';

const PetSection = ({ name, imgs = [], ...rest }) => {
  return (
    <div className='PetSection'>
      <div className='PetTitle'>{name}</div>
      <div className='PetsPage__imageWrapper'>
        {imgs.map((x, i) => (
          <img src={x} alt='' className='PetsPage__image' key={i} />
        ))}
      </div>
    </div>
  );
};

PetSection.propTypes = {
  name: PropTypes.string.isRequired,
  imgs: PropTypes.array.isRequired,
};

export default PetSection;
