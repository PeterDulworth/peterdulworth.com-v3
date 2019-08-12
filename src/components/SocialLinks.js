import React from 'react';
import PropTypes from 'prop-types';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLinks = props => {
    return (
        <div className="SocialLinks">
            <a className="SocialLinks__link" href="https://github.com/PeterDulworth" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="SocialLinks__link" href="https://www.linkedin.com/in/peter-dulworth/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </div>
    );
};

SocialLinks.propTypes = {
    
};

export default SocialLinks;