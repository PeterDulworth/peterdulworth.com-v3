import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, logo, href }) => {
    return (
        <a className='Card' href={href} target='_blank' rel='noreferrer noopener'>
            {/* <div className="Card__logo" > */}
            <img src={logo} loading='lazy' alt='logo' />
            {/* </div> */}
            {/* <div className="Card__content"> */}
            {/* <div className="Card__title">
                    {title}
                </div> */}
            {/* </div> */}
        </a>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    logo: PropTypes.any.isRequired,
    href: PropTypes.string.isRequired,
};

export default Card;
