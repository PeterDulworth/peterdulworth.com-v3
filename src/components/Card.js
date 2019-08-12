import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, logo, href }) => {
    return (
        <a className="Card" href={href} target="_blank">
            {/* <div className="Card__logo" >
                <img src={logo} alt="logo" />
            </div> */}
            {/* <div className="Card__content"> */}
                <div className="Card__title">
                    {title}
                </div>
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