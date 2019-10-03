import React from 'react';
import PropTypes from 'prop-types';

const RainbowText = ({ text, className }) => {
    return (
        <div className={`RainbowText ${className}`}>
            {text.split('').map((ch, i) => (
                <span key={i}>{ch}</span>
            ))}
        </div>
    );
};

RainbowText.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default RainbowText;
