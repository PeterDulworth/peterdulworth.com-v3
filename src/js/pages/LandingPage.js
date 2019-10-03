import React, { useContext } from 'react';
import CenterAlignedTable from '../components/CenterAlignedTable';
import SocialLinks from '../components/SocialLinks';
import { ThemeContext } from '../contexts/themeContext.js';
import RainbowText from '../components/RaindbowText';

const LandingPage = () => {
    const theme = useContext(ThemeContext);
    const subtitleThemeClass = theme.getThemeClass('LandingPage__subtitle');
    const titleThemeClass = theme.getThemeClass('LandingPage__title');

    // TODO add wavy underline
    return (
        <div className='LandingPage'>
            <div>
                <RainbowText text='Peter Dulworth' className={`LandingPage__title ${titleThemeClass}`} />
                <div className={`LandingPage__subtitle ${subtitleThemeClass}`}>
                    <CenterAlignedTable
                        items={[
                            {
                                left: 'SWE intern',
                                right: 'indeed.com',
                            },
                            {
                                left: 'CS',
                                right: 'rice university',
                            },
                        ]}
                    />
                    <br />
                    <SocialLinks />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
