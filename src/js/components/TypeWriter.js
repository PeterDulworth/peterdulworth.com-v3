import React from 'react';
import PropTypes from 'prop-types';

const TypeWriter = ({ text }) => {
    return (
        <div className='TypeWriter'>
            <div className='TypeWriter__input'>{text}</div>
        </div>
    );
};

TypeWriter.propTypes = {
    text: PropTypes.string.isRequired,
};

export default TypeWriter;
